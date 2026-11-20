import EventCard from "../components/events/EventCard";
import ProjectCard from "../components/projects/ProjectCard";
import GridContainer from "../components/GridContainer";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import { NavLink } from "react-router-dom";

const Home = ({ projects, events }) => {
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
            <NavLink to={"/eventos"}>
              <Button value="Explorar eventos" type="primary" />
            </NavLink>
            <NavLink to={"/projetos"}>
              <Button value="Explorar projetos" type="secondary" />
            </NavLink>
          </div>
        </Card>
        <section className="flex flex-col gap-4 mt-6">
          <h2 className="text-xl font-bold">Eventos</h2>
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
        </section>
        <h2 className="text-xl font-bold my-6">Projetos</h2>
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
      </div>
    </>
  );
};

export { Home };
