import { Info } from "lucide-react";
import Form from "../../components/Form";
import Input from "../../components/UI/Input";
import { useState } from "react";

const EditAdvisor = () => {
  const orientadorAntigo={name: "Orientador 1", email: "orientador1@ufersa.edu.br", password: "12345678", confirmPass: "12345678"}
  const [formData, setFormData] = useState(orientadorAntigo);
  
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
        title="Editar orientador"
        description="Cadastro realizado pela instituição responsável"
        action="Salvar edição"
      >
        <div className="rounded-md bg-secondary-100 p-4 flex gap-2">
          <Info className="text-secondary" />
          <div>
            <p className="text-secondary">Perfil: Orientador</p>
            <p className="text-sm text-muted-foreground">O orientador poderá gerenciar seus próprios projetos</p>
          </div>
        </div>
        <Input
          label="Nome"
          name="name"
          placeholder="Digite o nome do orientador"
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

export default EditAdvisor;
