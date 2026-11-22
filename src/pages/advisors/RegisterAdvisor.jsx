import { Info } from "lucide-react";
import Form from "../../components/Form";
import Input from "../../components/UI/Input";

const RegisterAdvisor = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Form
        width="xl:w-1/2 md:w-3/4 sm:w-[100%]"
        title="Cadastrar orientador"
        description="Cadastro realizado pela instituição responsável"
        action="Cadastrar orientador"
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

export default RegisterAdvisor;
