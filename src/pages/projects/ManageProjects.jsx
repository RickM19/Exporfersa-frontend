import { NavLink } from "react-router-dom";
import Card from "../../components/UI/Card";
import GridContainer from "../../components/GridContainer";
import ProjectCard from "../../components/projects/ProjectCard";
import Button from "../../components/UI/Button";

const ManageProjects = ({ projects }) => {
  return (
    <>
      <div>
        <section className="flex flex-col gap-4 mb-5">
          <span className="text-sm text-muted block">Inicio / Meus projetos</span>
          <span className="text-secondary text-xs uppercase">Área do orientador</span>
          <h1 className="text-2xl font-bold">
            Meus projetos
          </h1>
          <NavLink to={"/projetos/criar"}>
            <Button value="Cadastrar projeto" type="primary" />
          </NavLink>
        </section>
        <GridContainer>
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              projectId={project.id}
              title={project.projectName}
              category={project.category}
              eventName="Evento"
              summary={project.summary}
              status={"APROVADO"}
              manage={true}
            />
          ))}
        </GridContainer>
      </div>
    </>
  );
};

export default ManageProjects;
