import { useState } from "react";
import Form from "../../components/Form";
import Input from "../../components/UI/Input";

const EditEvent = ({eventoAntigo}) => {
  const [formData, setFormData] = useState(eventoAntigo);

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
        title="Editar evento"
        description="Atualize as informações do evento da sua instituição."
        action="Salvar edição"
        handleChange={handleChange}
        
      >
        <Input
          label="Nome"
          name="name"
          value={formData.name}
          type="text"
          handleChange={handleChange}
        />
        <Input
          label="Local"
          name="place"
          value={formData.place}
          type="text"
          handleChange={handleChange}
        />
        <div className="flex gap-[5%]">
          <Input label="Data" name="date" type="date" value={formData.date} handleChange={handleChange} />
          <Input label="Horário" name="time" type="time" value={formData.time} handleChange={handleChange} />
        </div>
        <Input
          label="Descrição"
          name="description"
          value={formData.description}
          type="textarea"
          handleChange={handleChange}
        />
        <Input label="Imagem do evento" name="imageName" type="file" />
      </Form>
    </div>
  );
};

export default EditEvent;
