import { CalendarDays, Clock, MapPin } from "lucide-react";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";

const EventPage = () => {
  return (
    <>
    <main className="flex gap-4 flex-col">
      
        <section className="flex flex-col gap-4">
            <span className="text-sm text-muted block">Inicio / Detalhes do evento</span>
            <h1 className="text-2xl font-bold">Título do evento</h1>
        </section>
        <section className="flex gap-4">
            <img src="/src/assets/kids_science_fair.jpg" className="rounded-md w-[50%]" />
            <div>
                <h2 className="text-xl font-bold">Sobre o evento</h2>
                <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum minus non amet saepe, possimus a!</p>
                <div className="p-4 bg-secondary-100 rounded-md flex flex-col gap-2">
                    <h2 className="text-xl font-bold">Projetos vinculados</h2>
                    <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Button value="Visualizar projetos" type="primary" />
                </div>
            </div>
        </section>
        <Card width="full">
            <div className="flex flex-col gap-4">
                <span className="flex gap-4 text-muted-foreground"><MapPin />Local: Av. XXXX, xx</span>
                <span className="flex gap-4 text-muted-foreground"><CalendarDays />Data: xx/xx/xxxx</span>
                <span className="flex gap-4 text-muted-foreground"><Clock />Horário: xx:xx</span>
            </div>
        </Card>
      </main>
    </>
  );
};

export default EventPage;