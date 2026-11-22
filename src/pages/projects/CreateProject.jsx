import { useState } from "react";
import Form from "../../components/Form";
import Field from "../../components/UI/Field";
import Input from "../../components/UI/Input";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";

const defaultFormState = {
  projectName: "",
  eventId: "",
  category: "",
  authors: [],
  summary: "",
  description: "",
  videoURL: ""
};
const categories = [
  { label: "Ciências Agrárias", value: "AGRARIAS" },
  { label: "Engenharias", value: "ENGENHARIAS" },
  { label: "Ciências Humanas", value: "HUMANAS" },
  { label: "Ciências Exatas", value: "EXATAS" },
  { label: "Ciências Biológicas", value: "BIOLOGICAS" },
  { label: "Ciências Sociais e da Saúde", value: "SOCIAIS_SAUDE" }
];

const CreateProject = ({ events = [], setProjects, projects = [] }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(defaultFormState);
  const [authorName, setAuthorName] = useState("");
  const [authorsError, setAuthorsError] = useState("");
  const eventOptions = events.map((event) => ({
    label: event.name,
    value: event.id
  }));

  const handleAddAuthor = () => {
    const name = authorName.trim();

    if (!name) return;

    // Evita autores duplicados
    if (formData.authors.includes(name)) return;

    setFormData((prev) => ({
      ...prev,
      authors: [...prev.authors, name]
    }));

    setAuthorName("");
    setAuthorsError("");
  };

  const handleRemoveAuthor = (name) => {
    setFormData((prev) => ({
      ...prev,
      authors: prev.authors.filter((author) => author !== name)
    }));
    setAuthorsError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: Math.max(0, ...projects.map((project) => project.id)) + 1,
      ...formData,
      status: "PENDENTE",
      createdAt: new Date().toISOString()
    };

    setProjects((prev) => [...prev, newProject]);

    setFormData({ ...defaultFormState });

    navigate("/meus-projetos");
  };

  return (
    <div className="flex justify-center items-center h-full w-full">
      <Form
        width="xl:w-1/2 md:w-3/4 sm:w-[100%]"
        title="Criar projeto"
        description="Cadastre as informações do projeto"
        action="Cadastrar e submeter"
        onSubmit={handleSubmit}
      >
        <Field name="Informações do projeto">
          <div className="flex flex-col gap-2">
            <Input
              label="Nome do autor"
              name="authorName"
              placeholder="Digite o nome completo do autor"
              type="text"
              value={authorName}
              handleChange={(e) => setAuthorName(e.target.value)}
            />

            <Button
              type="secondary"
              value="Adicionar autor"
              onClick={handleAddAuthor}
            />

            <div className="flex flex-col gap-2">
              {formData.authors.map((author, index) => (
                <div
                  key={`${author}-${index}`}
                  className="flex items-center justify-between p-2 border rounded-md"
                >
                  <span>{author}</span>

                  <Button
                    type="ghost"
                    value="Remover"
                    onClick={() => handleRemoveAuthor(author)}
                  />
                </div>
              ))}
            </div>
          </div>
          <Input
            label="Nome"
            name="projectName"
            placeholder="Digite o nome do projeto"
            type="text"
            value={formData.projectName}
            handleChange={handleChange}
            required
          />

          <Input
            label="Evento"
            name="eventId"
            placeholder="Selecione um evento"
            type="select"
            options={eventOptions}
            value={formData.eventId}
            handleChange={handleChange}
            required
          />

          <Input
            label="Categoria"
            name="category"
            placeholder="Selecione uma categoria"
            type="select"
            options={categories}
            value={formData.category}
            handleChange={handleChange}
            required
          />

          <Input
            label="Resumo"
            name="summary"
            placeholder="Digite o resumo do projeto"
            type="textarea"
            value={formData.summary}
            handleChange={handleChange}
            required
          />

          <Input
            label="Descrição"
            name="description"
            placeholder="Digite o texto do projeto"
            type="textarea"
            value={formData.description}
            handleChange={handleChange}
            required
          />
        </Field>

        <Field name="Mídias">
          <Input
            label="Apresentação em vídeo"
            name="videoURL"
            placeholder="Insira a URL do vídeo"
            type="url"
            value={formData.videoURL}
            handleChange={handleChange}
            required
          />

          <Input label="Imagem do projeto" name="imageName" type="file" />
        </Field>

        <div className="flex gap-2">
          <input type="checkbox" required />
          <span className="text-muted">
            Confirmo que os dados estão corretos
          </span>
        </div>
        {authorsError && <p className="text-danger text-sm">{authorsError}</p>}
      </Form>
    </div>
  );
};

export default CreateProject;
