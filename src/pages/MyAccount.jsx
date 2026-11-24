import { useState } from "react";
import AuthField from "../components/auth/AuthField";
import Avatar from "../components/UI/Avatar";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import { useAuth } from "../hooks/useAuth";
import { isValidEmail } from "../utils/validators";

const roleLabels = {
  ADMIN: "Administrador",
  USER: "Usuário"
};

const validate = ({ name, email }) => {
  const errors = {};

  if (name.trim().length < 3) errors.name = "Informe seu nome.";
  if (!isValidEmail(email)) errors.email = "Informe um e-mail válido.";

  return errors;
};

const MyAccount = () => {
  const { user, updateUser } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [saveError, setSaveError] = useState("");
  const [success, setSuccess] = useState("");

  const startEditing = () => {
    setForm({ name: user.username, email: user.email });
    setErrors({});
    setSaveError("");
    setSuccess("");
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate(form);
    setErrors(newErrors);
    setSaveError("");

    if (Object.keys(newErrors).length > 0) return;

    const result = updateUser({ username: form.name, email: form.email });

    if (!result.success) {
      setSaveError(result.message);
      return;
    }

    setIsEditing(false);
    setSuccess("Dados atualizados com sucesso.");
  };

  return (
    <div className="flex flex-col gap-8">
      <span className="text-sm text-muted">Início / Minha conta</span>

      <Card width="w-full max-w-120" className="mx-auto p-6 flex flex-col items-center">
        <Avatar src={user.avatarUrl} alt={user.username} />

        {isEditing ? (
          <form onSubmit={handleSubmit} noValidate className="w-full mt-6">
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

            {saveError && <p className="text-danger text-sm mb-4">{saveError}</p>}

            <div className="flex gap-2">
              <Button
                type="secondary"
                value="Cancelar"
                width="w-full"
                onClick={() => setIsEditing(false)}
              />
              <Button htmlType="submit" value="Salvar" width="w-full" />
            </div>
          </form>
        ) : (
          <>
            <h1 className="text-2xl font-bold mt-4">{user.username}</h1>
            <p className="text-muted">{user.email}</p>

            <span className="p-1 mt-2 rounded-sm bg-secondary-100 text-secondary text-xs">
              {roleLabels[user.role] ?? user.role}
            </span>

            {success && <p className="text-success text-sm mt-4">{success}</p>}

            <Button
              type="secondary"
              value="Editar perfil"
              className="mt-6"
              onClick={startEditing}
            />
          </>
        )}
      </Card>
    </div>
  );
};

export default MyAccount;
