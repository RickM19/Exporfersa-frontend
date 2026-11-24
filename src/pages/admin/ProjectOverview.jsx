import { PlusCircle, Search } from "lucide-react";
import AdminLayout from "../../components/admin/AdmimLayout";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import ProjectCard from "../../components/projects/ProjectCard";
import { mockProjects } from "../../mocks/projects";
import { NavLink } from "react-router-dom";


const ProjectOverview = () => {
  return(
    <AdminLayout
      breadcrumb="Gerenciar Projetos" 
      title="Gerenciar Projetos" 
      description="Consulte e gerencie os projetos da plataforma"
    >
      <div className="w-full p-4 bg-white rounded-xl flex flex-row justify-between gap-12">
        <div className="w-full relative">
          <Search className="absolute bottom-2.5 right-2" />
          <Input
            label="Pesquisar"
            placeholder="Pesquisar pelo nome do projeto"
          />
        </div>
        <NavLink to="/meus-projetos/cadastrar" className="h-3/4 self-center" >
          <Button
            value={
              <div className="flex flex-row gap-2 items-center">
                <PlusCircle />
                <p>Cadastrar</p>
              </div>
            }
          />
        </NavLink>
      </div>
      <div className="w-full p-8 rounded-xl bg-white grid grid-cols-2 gap-4">
        { mockProjects.map((item) => (
          <ProjectCard
            {...item} 
          />
        ))}
      </div>
    </AdminLayout>
  );
}

export default ProjectOverview;
