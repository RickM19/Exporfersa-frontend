import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthField from "../../components/auth/AuthField";
import Button from "../../components/UI/Button";
import { useAuth } from "../../hooks/useAuth";
import { isValidEmail } from "../../utils/validators";

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  confirmData: false
};

const validate = (form) => {
  const errors = {};

  if (form.name.trim().length < 3) errors.name = "Informe seu nome.";
  if (!isValidEmail(form.email)) errors.email = "Informe um e-mail válido.";
  if (form.password.length < 6)
    errors.password = "A senha deve ter pelo menos 6 caracteres.";
  if (form.confirmPassword !== form.password)
    errors.confirmPassword = "As senhas não coincidem.";
  if (!form.confirmData)
    errors.confirmData = "Confirme que os dados estão corretos.";

  return errors;
};

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [registerError, setRegisterError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate(form);
    setErrors(newErrors);
    setRegisterError("");

    if (Object.keys(newErrors).length > 0) return;

    const result = register({
      username: form.name,
      email: form.email,
      password: form.password
    });

    if (!result.success) {
      setRegisterError(result.message);
      return;
    }

    navigate("/", { replace: true });
  };

  return (
    <AuthLayout
      breadcrumb="Cadastro de visitante"
      title="Cadastro de visitante"
      description="Crie sua conta de visitante."
    >
      <form onSubmit={handleSubmit} noValidate>
        <AuthField
          id="name"
          label="Nome"
          placeholder="Digite seu nome"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />
        <AuthField
          id="email"
          label="Email"
          type="email"
          placeholder="Digite seu email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <AuthField
          id="password"
          label="Senha"
          type="password"
          placeholder="Crie uma senha"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        <AuthField
          id="confirmPassword"
          label="Confirmar senha"
          type="password"
          placeholder="Repita a senha"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="confirmData"
            checked={form.confirmData}
            onChange={handleChange}
          />
          Confirmo que os dados estão corretos
        </label>
        <p className="mt-1 min-h-5 text-xs text-danger">{errors.confirmData}</p>

        {registerError && (
          <p className="mb-4 rounded-md bg-danger-50 p-3 text-sm text-danger">
            {registerError}
          </p>
        )}

        <Button htmlType="submit" value="Cadastrar visitante" width="w-full" />
      </form>

      <p className="mt-4 text-center">
        <Link to="/login" className="font-semibold text-secondary">
          Já tenho uma conta
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Register;
