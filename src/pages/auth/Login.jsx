import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthField from "../../components/auth/AuthField";
import Button from "../../components/UI/Button";
import { useAuth } from "../../hooks/useAuth";
import { isValidEmail } from "../../utils/validators";

const validate = ({ email, password }) => {
  const errors = {};

  if (!isValidEmail(email)) errors.email = "Informe um e-mail válido.";
  if (!password) errors.password = "Informe sua senha.";

  return errors;
};

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate(form);
    setErrors(newErrors);
    setLoginError("");

    if (Object.keys(newErrors).length > 0) return;

    const result = login(form);

    if (!result.success) {
      setLoginError(result.message);
      return;
    }

    navigate(location.state?.from ?? "/", { replace: true });
  };

  return (
    <AuthLayout
      breadcrumb="Login"
      title="Entrar no ExporFersa"
      description="Acesse sua conta com email e senha."
    >
      <form onSubmit={handleSubmit} noValidate>
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
          placeholder="Digite sua senha"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        {loginError && <p className="text-danger text-sm mb-4">{loginError}</p>}

        <Button htmlType="submit" value="Entrar" width="w-full" />
      </form>

      <p className="mt-4 text-center">
        <Link to="/cadastro" className="font-semibold text-secondary">
          Cadastre-se como visitante
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
