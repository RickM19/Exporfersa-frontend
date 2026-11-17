import Form from "../../components/Form";
import Input from "../../components/UI/Input";

const CreateEvent = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Form
        width="w-1/2"
        title="Criar evento"
        description="Cadastre as informações do evento"
        action="Criar evento"
      >
        <Input
          label="Nome"
          name="eventName"
          placeholder="Digite o nome do evento"
          type="text"
        />
        <Input
          label="Local"
          name="placeName"
          placeholder="Digite o local do evento"
          type="text"
        />
        <div className="flex gap-[5%]">
          <Input label="Data" name="dateName" type="date" />
          <Input label="Horário" name="timeName" type="time" />
        </div>
        <Input
          label="Descrição"
          name="descriptionName"
          placeholder="Digite a descrição do evento"
          type="textarea"
        />
        <Input label="Imagem do evento" name="imageName" type="file" />
      </Form>
    </div>
  );
};

export default CreateEvent;
