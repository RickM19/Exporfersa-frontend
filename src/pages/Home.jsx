import EventContainer from "../components/events/EventContainer";
import ProjectContainer from "../components/projects/ProjectContainer";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const Home = () => {
  return (
    <>
      <Card>
        <span>Exporfersa</span>
        <h1>Explore eventos e projetos</h1>
        <p>Acesse os eventos e conheça os projetos apresentados na plataforma</p>
        <Button value='Explorar eventos' type='primary' />
        <Button value='Explorar projetos' type='secondary' />
        <Button value='Explorar projetos' type='destructive' />
      </Card>
      <EventContainer />
      <ProjectContainer />
    </>
  );
};

export { Home };
