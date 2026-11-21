import { Search } from "lucide-react";
import EventCard from "../../components/events/EventCard";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";

const ViewEvents = ({ events }) => {
  return (
    <>
      <main className="flex flex-col gap-6">
        <div className="flex gap-4 flex-col">
          <span className="text-sm text-muted block">Inicio / Eventos</span>
          <span className="text-secondary uppercase text-sm">Explorar</span>
          <h1 className="text-2xl font-bold">Mostra de Eventos</h1>
          <Card width="w-full">
            <div className="relative">
              <Search className="absolute bottom-2.5 right-2" />
              <Input
                label="Pesquisar"
                placeholder="Pesquisar pelo nome do evento"
              />
            </div>
          </Card>
        </div>
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Eventos cadastrados</h2>
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
      </main>
    </>
  );
};

export default ViewEvents;
