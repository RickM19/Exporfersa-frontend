import EventCard from "../components/events/EventCard";
import ProjectCard from "../components/projects/ProjectCard";
import GridContainer from "../components/GridContainer";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApiRequest } from "../hooks/useApiRequest";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import projectService from "../services/projectService";
import eventService from "../services/eventService";

const { getProjects } = projectService;
const { getEvents } = eventService;
const LayoutContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-32 text-muted text-sm">
      {children}
    </div>
  );
};
const Home = () => {
  const [projects, setProjects] = useState([]);
  const [events, setEvents] = useState([]);

  const {
    execute: executeProjects,
    loading: projectsLoading,
    error: projectsError
  } = useApiRequest();

  const {
    execute: executeEvents,
    loading: eventsLoading,
    error: eventsError
  } = useApiRequest();

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      const [projectsResult, eventsResult] = await Promise.allSettled([
        executeProjects(() => getProjects({}, controller.signal)),
        executeEvents(() => getEvents({}, controller.signal))
      ]);
      console.log("Projetos:", projectsResult);
      console.log("Eventos:", eventsResult);

      if (controller.signal.aborted) return;

      if (projectsResult.status === "fulfilled") {
        setProjects(projectsResult.value);
      }

      if (eventsResult.status === "fulfilled") {
        setEvents(eventsResult.value);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [executeProjects, executeEvents]);

  return (
    <>
      <div>
        <Card width="w-full">
          <span className="text-secondary text-xs uppercase">Exporfersa</span>

          <h1 className="text-2xl font-bold my-2">
            Explore eventos e projetos
          </h1>

          <p className="text-xs text-muted">
            Acesse os eventos e conheça os projetos apresentados na plataforma
          </p>

          <div className="mt-4 flex gap-2">
            <NavLink to="/eventos">
              <Button value="Explorar eventos" type="primary" />
            </NavLink>

            <NavLink to="/projetos">
              <Button value="Explorar projetos" type="secondary" />
            </NavLink>
          </div>
        </Card>

        <h2 className="text-xl font-bold my-6">Eventos</h2>

        {eventsLoading ? (
          <LayoutContainer>
            <div className="text-muted text-sm flex items-center gap-2">
              <LoadingSpinner />
              Carregando eventos...
            </div>
          </LayoutContainer>
        ) : eventsError ? (
          <LayoutContainer>
            Não foi possível carregar os eventos.
          </LayoutContainer>
        ) : events.length === 0 ? (
          <LayoutContainer>
            Nenhum evento disponível no momento.
          </LayoutContainer>
        ) : (
          <GridContainer>
            {events.slice(0, 3).map((event) => (
              <EventCard
                key={event.id}
                eventId={event.id}
                name={event.name}
                startDate={event.dates.startDate}
                endDate={event.dates.endDate}
                startTime={event.hours.startTime}
                closeTime={event.hours.closeTime}
                place="UFERSA"
              />
            ))}
          </GridContainer>
        )}

        <h2 className="text-xl font-bold my-6">Projetos</h2>

        {projectsLoading ? (
          <LayoutContainer>
            <div className="text-muted text-sm flex items-center gap-2">
              <LoadingSpinner />
              Carregando projetos...
            </div>
          </LayoutContainer>
        ) : projectsError ? (
          <LayoutContainer>
            Não foi possível carregar os projetos.
          </LayoutContainer>
        ) : projects.length === 0 ? (
          <LayoutContainer>Nenhum projeto cadastrado!</LayoutContainer>
        ) : (
          <GridContainer>
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                projectId={project.id}
                title={project.projectName}
                category={project.category}
                eventName={project.eventName}
                summary={project.summary}
                status={project.status || "APROVADO"}
              />
            ))}
          </GridContainer>
        )}
      </div>
    </>
  );
};

export { Home };
