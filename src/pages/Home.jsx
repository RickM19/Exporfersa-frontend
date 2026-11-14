import EventContainer from "../components/events/EventContainer";
import ProjectContainer from "../components/projects/ProjectContainer";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const Home = () => {
  return (
    <>
      <Card>
        <span className="text-secondary text-xs uppercase">Exporfersa</span>
        <h1 className="text-2xl font-bold my-2">Explore eventos e projetos</h1>
        <p className="text-xs text-muted">Acesse os eventos e conheça os projetos apresentados na plataforma</p>
        <div className="mt-4 flex gap-2">
          <Button value='Explorar eventos' type='primary' />
          <Button value='Explorar projetos' type='secondary' />
        </div>
      </Card>
      <EventContainer />
      <ProjectContainer />
    </>
  );
};

export { Home };
