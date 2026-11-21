import { Search } from "lucide-react";
import GridContainer from "../../components/GridContainer";
import ProjectCard from "../../components/projects/ProjectCard";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";
import { useState } from "react";

const ViewProjects = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState("Todas as categorias");
  const categories = ["Todas as categorias", "Ciências Agrárias", "Engenharia", "Ciências humanas", "Ciências Exatas e da Terra", "Ciências Biológicas", "Ciências Sociais e Aplicadas", "Ciências da Saúde"];
  
  return (
    <>
      <main className="flex flex-col gap-6">
        <div className="flex gap-4 flex-col">
          <span className="text-sm text-muted block">Inicio / Projetos</span>
          <span className="text-secondary uppercase text-sm">Explorar</span>
          <h1 className="text-2xl font-bold">Mostra de Projetos</h1>
        </div>
        <Card width="w-full">
          <div className="flex flex-col gap-4">
            <div className="relative"><Search className="absolute bottom-2.5 right-2" /><Input label="Pesquisar" placeholder="Pesquisar pelo nome do projeto" /></div>
            <p className="text-sm font-bold">Categorias</p>
            <div className="flex flex-wrap gap-2">
              {
                categories.map((category, index) => (
                  <div key={index} className={`border-2 p-2 w-max text-sm rounded-sm cursor-pointer ${selectedCategory == category ? 'text-secondary border-secondary' : 'text-muted-foreground'}`} onClick={() => setSelectedCategory(category)}>{category}</div>
                ))
              }
            </div>
          </div>
        </Card>
        <section>
          <h2 className="text-xl font-bold mb-4">Projetos cadastrados</h2>
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
              />
            ))}
          </GridContainer>
        </section>
      </main>
    </>
  );
};

export default ViewProjects;