import { NavLink } from "react-router-dom";
import GridContainer from "../../components/GridContainer";
import ProjectCard from "../../components/projects/ProjectCard";
import Button from "../../components/UI/Button";

const ManageProjects = ({ projects, setProjects }) => {
  const handleDelete = (projectId) => {
    const confirmed = window.confirm(
      "Tem certeza que deseja excluir este projeto?"
    );

    if (!confirmed) return;

    setProjects((prev) => prev.filter((project) => project.id !== projectId));
  };

  return (
    <>
      <div>
        <section className="flex flex-col gap-4 mb-5">
          <span className="text-sm text-muted block">
            Inicio / Meus projetos
          </span>
          <span className="text-secondary text-xs uppercase">
            Área do orientador
          </span>
          <h1 className="text-2xl font-bold">Meus projetos</h1>
          <NavLink to={"cadastrar"}>
            <Button value="Cadastrar projeto" type="primary" />
          </NavLink>
        </section>
        <GridContainer>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              projectId={project.id}
              title={project.projectName}
              category={project.category}
              eventName="Evento"
              summary={project.summary}
              status={project.status || "APROVADO"}
              manage={true}
              handleDelete={handleDelete}
            />
          ))}
        </GridContainer>
      </div>
    </>
  );
};

export default ManageProjects;
