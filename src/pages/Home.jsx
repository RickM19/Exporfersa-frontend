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
import RequestState from "../components/UI/RequestState";

const { getProjects } = projectService;
const { getEvents } = eventService;

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

        <RequestState
          loading={eventsLoading}
          error={eventsError}
          empty={events.length === 0 && "Nenhum evento disponível no momento."}
        >
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
        </RequestState>

        <h2 className="text-xl font-bold my-6">Projetos</h2>

        <RequestState
          loading={projectsLoading}
          error={projectsError}
          empty={projects.length === 0 && "Nenhum projeto cadastrado!"}
        >
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
        </RequestState>
      </div>
    </>
  );
};

export { Home };
