import { useParams, Link } from "react-router-dom";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import { formatDate } from "../../utils/formatDate";

const EventPage = ({ events = [] }) => {
  const { id } = useParams();

  const event = events.find((event) => event.id === Number(id));

  if (!event) {
    return (
      <main className="flex flex-col items-center justify-center gap-3 py-12">
        <h1 className="text-2xl font-bold">Evento não encontrado</h1>
        <p className="text-sm text-muted">
          O evento que você está procurando não existe.
        </p>
        <Link to="/eventos">
          <Button value="Voltar para eventos" type="primary" />
        </Link>
      </main>
    );
  }

  const formatDates = () => {
    const { startDate, endDate } = event.dates;

    if (startDate === endDate) {
      return formatDate(startDate);
    }

    return `${formatDate(startDate)} até ${formatDate(endDate)}`;
  };

  return (
    <main className="flex gap-4 flex-col">
      <section className="flex flex-col gap-4">
        <span className="text-sm text-muted block">
          Início / Detalhes do evento
        </span>

        <h1 className="text-2xl font-bold">{event.name}</h1>
      </section>

      <section className="flex gap-4">
        {event.imagesURLs?.length > 0 && (
          <img
            src={event.imagesURLs[0]}
            alt={event.name}
            className="rounded-md w-[50%] object-cover"
          />
        )}

        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-xl font-bold">Sobre o evento</h2>

          <p className="text-sm text-muted-foreground">
            {event.description ||
              "Nenhuma descrição disponível para este evento."}
          </p>

          <div className="p-4 bg-secondary-100 rounded-md flex flex-col gap-2">
            <h2 className="text-xl font-bold">Projetos vinculados</h2>

            <p className="text-sm text-muted-foreground">
              Confira os projetos cadastrados neste evento.
            </p>

            <Link to={`/eventos/${event.id}/projetos`}>
              <Button value="Visualizar projetos" type="primary" />
            </Link>
          </div>
        </div>
      </section>

      <Card width="full">
        <div className="flex flex-col gap-4">
          <span className="flex gap-4 text-muted-foreground">
            <MapPin />
            Local: {event.location || "UFERSA"}
          </span>

          <span className="flex gap-4 text-muted-foreground">
            <CalendarDays />
            Data: {formatDates()}
          </span>

          <span className="flex gap-4 text-muted-foreground">
            <Clock />
            Horário: {event.hours.startTime} às {event.hours.closeTime}
          </span>
        </div>
      </Card>
    </main>
  );
};

export default EventPage;
