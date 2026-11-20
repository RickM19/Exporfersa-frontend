import Form from "../../components/Form";
import Field from "../../components/UI/Field";
import Input from "../../components/UI/Input";

const CreateProject = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Form
        width="xl:w-1/2 md:w-3/4 sm:w-[100%]"
        title="Criar projeto"
        description="Cadastre as informações do projeto"
        action="Cadastrar e submeter"
      >
        <Field name="Informações do projeto">
          <Input
            label="Nome"
            name="name"
            placeholder="Digite o nome do projeto"
            type="text"
          />
          <Input
            label="Evento"
            name="event"
            placeholder="Selecione um evento"
            type="select"
          />
          <Input
            label="Resumo"
            name="description"
            placeholder="Digite o resumo do projeto"
            type="textarea"
          />
        </Field>
        <Field name="Mídias">
          <Input
            label="Apresentação em vídeo"
          />
          <Input label="Imagem do projeto" name="imageName" type="file" />
        </Field>
        <div className="flex gap-2">
          <input type="checkbox"/>
          <span className="text-muted">Confirmo que os dados estão corretos</span>
        </div>
      </Form>
    </div>
  );
};

export default CreateProject;
