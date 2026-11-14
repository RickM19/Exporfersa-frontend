import EventCard from "../components/events/EventCard";
import ProjectCard from "../components/projects/ProjectCard";
import GridContainer from "../components/GridContainer";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const Home = () => {
  return (
    <>
      <main className="p-5">
        <Card>
          <span className="text-secondary text-xs uppercase">Exporfersa</span>
          <h1 className="text-2xl font-bold my-2">Explore eventos e projetos</h1>
          <p className="text-xs text-muted">Acesse os eventos e conheça os projetos apresentados na plataforma</p>
          <div className="mt-4 flex gap-2">
            <Button value='Explorar eventos' type='primary' />
            <Button value='Explorar projetos' type='secondary' />
          </div>
        </Card>
        <h2 className="text-xl font-bold my-6">Eventos</h2>
        <GridContainer>
          <EventCard name='Evento' date='13/11/2026' time='14:05' place='Ufersa' />
          <EventCard name='Evento' date='13/11/2026' time='14:05' place='Ufersa' />
          <EventCard name='Evento' date='13/11/2026' time='14:05' place='Ufersa' />
        </GridContainer>
        <h2 className="text-xl font-bold my-6">Projetos</h2>
        <GridContainer>
          <ProjectCard title='Titulo' category='Categoria' eventName='Evento' description='Lorem ipsum dolor sit amet' status='Aprovado' />
          <ProjectCard title='Titulo' category='Categoria' eventName='Evento' description='Lorem ipsum dolor sit amet' status='Aprovado' />
          <ProjectCard title='Titulo' category='Categoria' eventName='Evento' description='Lorem ipsum dolor sit amet' status='Aprovado' />
        </GridContainer>
      </main>
    </>
  );
};

export { Home };
