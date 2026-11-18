import { useState } from "react";
import Form from "../../components/Form";
import Field from "../../components/UI/Field";
import Input from "../../components/UI/Input";

const EditProject = ({projetoAntigo}) => {
  const [formData, setFormData] = useState(projetoAntigo);

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
        title="Editar projeto"
        description="Atualize as informações do projeto"
        action="Salvar edição"
      >
        <Field name="Informações do projeto">
          <Input
            label="Nome"
            name="name"
            placeholder="Digite o nome do projeto"
            type="text"
            value={formData.name}
            handleChange={handleChange}
          />
          <Input
            label="Evento"
            name="event"
            placeholder={formData.event}
            type="select"
            handleChange={handleChange}
          />
          <Input
            label="Resumo"
            name="description"
            placeholder="Digite o resumo do projeto"
            type="textarea"
            value={formData.description}
            handleChange={handleChange}
          />
        </Field>
        <Field name="Mídias">
          <Input
            label="Apresentação em vídeo"
            value={formData.videoUrl}
            handleChange={handleChange}
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

export default EditProject;
