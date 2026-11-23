import ManageOptions from "../../components/admin/ManageOptions.jsx";
import SystemStatCard from "../../components/admin/SystemStatCard.jsx";
import EventCard from "../../components/events/EventCard.jsx";
import ProjectCard from "../../components/projects/ProjectCard.jsx";
import Collapse from "../../components/UI/Collapse.jsx";
import { mockEvents } from "../../mocks/events.js";
import { mockProjects } from "../../mocks/projects.js";

const SystemOverview = () => {

  const randomStats = [
    { title: "Eventos cadastrados", description: "Total de eventos da plataforma", total: 1 },
    { title: "Projetos pendentes", description: "Considerando todos os evntos", total: 2},
    { title: "Projetos aprovados", description: "Considerando todos os eventos", total: 3 },
    { title: "Projetos rejeitados", description: "Considerando todos os eventos", total: 0 }
  ];

  return(
    <div className="h-full w-full gap-8 flex flex-col">
      <div className="w-full px-3 py-2 flex flex-row justify-between items-center">
        <section className="flex flex-col gap-1">
          <p className="font-semibold text-xs text-secondary">Administração</p>
          <h1 className="text-3xl font-bold my-2">Visão geral</h1>
          <p className="text-xs text-text-secondary">Veja as estatísticas da ExporFersa e gerencie eventos e projetos.</p>
        </section>
        <ManageOptions />
      </div>
      <div className="w-full grid grid-cols-4 grid-rows-1 gap-4">
        {
        randomStats.map((element) => (
          <SystemStatCard
            key={element.title} 
            title={element.title}
            description={element.description}
            stats={element.total}
          />
        ))
        }
      </div>
      <h2 className="font-semibold text-2xl text-primary">Gestão da plataforma</h2>
      <div className="w-full gap-4 flex flex-col">
        <Collapse title="Eventos" description="Crie, edite e exclua eventos">
          <div className="w-full grid grid-cols-2 gap-4">
            { mockEvents.map((item) => (
              <EventCard {...item} />
            ))}
          </div>
        </Collapse>
        <Collapse title="Projeto" description="Consulte e aprove projetos">
          <div className="w-full grid grid-cols-2 gap-4">
            { mockProjects.map((item) => (
              <ProjectCard {...item} />
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default SystemOverview;
