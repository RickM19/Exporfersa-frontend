import Form from "../../components/Form";
import Input from "../../components/UI/Input";

const RegisterInstitution = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Form
        width="xl:w-1/2 md:w-3/4 sm:w-[100%]"
        title="Cadastrar instituição"
        description="Cadastro realizado pelo administrador"
        action="Cadastrar instituição"
      >
          <Input
            label="Nome"
            name="name"
            placeholder="Digite o nome da instituição"
            type="text"
          />
          <Input
            label="Email"
            name="email"
            placeholder="Digite o email"
            type="email"
          />
          <Input
            label="Senha"
            name="password"
            placeholder="********"
            type="password"
          />
          <Input
            label="Confirmar senha"
            name="password"
            placeholder="********"
            type="password"
          />
        <div className="flex gap-2">
          <input type="checkbox"/>
          <span className="text-muted">Confirmo que os dados estão corretos</span>
        </div>
      </Form>
    </div>
  );
};

export default RegisterInstitution;
