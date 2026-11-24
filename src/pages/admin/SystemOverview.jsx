import AdminLayout from "../../components/admin/AdmimLayout.jsx";
import SystemStatCard from "../../components/admin/SystemStatCard.jsx";
import EventCard from "../../components/events/EventCard.jsx";
import ProjectCard from "../../components/projects/ProjectCard.jsx";
import Collapse from "../../components/UI/Collapse.jsx";
import { mockEvents } from "../../mocks/events.js";
import { mockProjects } from "../../mocks/projects.js";

const SystemOverview = () => {

  const randomStats = [
    { title: "Eventos cadastrados", description: "Total de eventos da plataforma", total: 1 },
    { title: "Projetos pendentes", description: "Considerando todos os eventos", total: 2},
    { title: "Projetos aprovados", description: "Considerando todos os eventos", total: 15 },
    { title: "Orientadores", description: "Considerando toda a plataforma", total: 3 }
  ];

  return(
    <AdminLayout 
      breadcrumb="visão geral" 
      title="Visão geral" 
      description="Veja as estatísticas da ExporFersa e gerencie eventos e projetos." 
    >
      <div className="w-full flex flex-row gap-4">
        { randomStats.map((element) => (
          <SystemStatCard
            key={element.title} 
            title={element.title}
            description={element.description}
            stats={element.total}
          />
        ))}
      </div>
      <h2 className="font-semibold text-2xl text-primary">Gestão da plataforma</h2>
      <div className="w-full gap-4 flex flex-col">
        <Collapse title="Eventos" description="Consulte os eventos da plataforma">
          <div className="w-full grid grid-cols-2 gap-6">
            { mockEvents.map((item) => (
              <EventCard 
                eventId={item.id}
                startDate={item.dates.startDate}
                endDate={item.dates.endDate}
                startTime={item.hours.startTime}
                closeTime={item.hours.closeTime}
                {...item} 
              />
            ))}
          </div>
        </Collapse>
        <Collapse 
          title="Projeto" 
          description="Consulte e aprove projetos"
          select={true}
          selectOptions={["Aprovados", "Rejeitados", "Pendentes"]}
        >
          <div className="w-full grid grid-cols-3 gap-6">
            { mockProjects.map((item) => (
              <ProjectCard {...item} />
            ))}
          </div>
        </Collapse>
        <Collapse title="Orientadores" description="Consulte os orientadores da plataforma" >
            
        </Collapse>
      </div>
    </AdminLayout>
  );
}

export default SystemOverview;
