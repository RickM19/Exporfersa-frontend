import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { formatDate } from "../../utils/formatDate";
import defaultEventImage from "../../assets/kids_science_fair.jpg";

const EventCard = ({
  imageUrl,
  eventId,
  name,
  startDate,
  startTime,
  endDate,
  closeTime,
  place,
  manage
}) => {
  const eventUrl = `/eventos/${eventId}`;
  return (
    <>
      <div className="flex shadow-md rounded-xl max-w-150 bg-white overflow-hidden">
        <img
          src={imageUrl || defaultEventImage}
          alt={`Imagem do evento ${name}`}
          loading="lazy"
          className="w-50 shrink-0 object-cover object-center"
        />
        <div className="p-4 w-full">
          <div className="mb-2">
            <span className="p-1 rounded-sm bg-blue-100 text-category-exatas text-xs">
              Evento
            </span>
          </div>
          <h1 className="text-l font-bold mb-2">{name}</h1>
          <div className="text-xs mb-3 flex">
            <span className="flex mr-4 items-center">
              <CalendarDays className="mr-1 size-5" />
              {`${formatDate(startDate)} - ${formatDate(endDate)}`}
            </span>
            <span className="flex items-center">
              <Clock className="mr-1 size-5" />
              {`${startTime} - ${closeTime}`}
            </span>
          </div>
          <p className="flex mb-2 text-xs">
            <MapPin className="mr-1 size-5" />
            {place}
          </p>
          <NavLink
            className={`text-sm text-secondary flex items-center cursor-pointer ${!manage && "p-4 border-2 border-secondary rounded-md hover:bg-secondary hover:text-white transition-all"}`}
            to={eventUrl}
          >
            Visualizar evento
            <ArrowRight className="size-5 ml-1" />
          </NavLink>
          {manage && (
            <div className="mt-2 flex gap-2">
              <Button width="w-1/2" type="secondary" value="Editar" />
              <Button width="w-1/2" type="destructive" value="Excluir" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventCard;
