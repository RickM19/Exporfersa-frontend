import { useState } from "react";
import Form from "../../components/Form";
import Input from "../../components/UI/Input";

const EditInstitution = () => {
  const instituicaoAntiga={name: "Instituição 1", email: "inst1@gmail.com", password: "12345678", confirmPass: "12345678"}
  
  const [formData, setFormData] = useState(instituicaoAntiga);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="flex justify-center items-center h-full w-full">
      <Form
        width="xl:w-1/2 md:w-3/4 sm:w-[100%]"
        title="Editar instituição"
        description="Cadastro realizado pelo administrador"
        action="Salvar edição"
      >
          <Input
            label="Nome"
            name="name"
            placeholder="Digite o nome da instituição"
            type="text"
            value={formData.name}
            handleChange={handleChange}
          />
          <Input
            label="Email"
            name="email"
            placeholder="Digite o email"
            type="email"
            value={formData.email}
            handleChange={handleChange}
          />
          <Input
            label="Senha"
            name="password"
            placeholder="********"
            type="password"
            value={formData.password}
            handleChange={handleChange}
          />
          <Input
            label="Confirmar senha"
            name="confirmPass"
            placeholder="********"
            type="password"
            value={formData.confirmPass}
            handleChange={handleChange}
          />
        <div className="flex gap-2">
          <input type="checkbox"/>
          <span className="text-muted">Confirmo que os dados estão corretos</span>
        </div>
      </Form>
    </div>
  );
};

export default EditInstitution;
