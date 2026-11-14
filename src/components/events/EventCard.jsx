import Button from "../UI/Button";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";

const EventCard = ({eventId, imageUrl, name, date, time, place, manage}) => {
    const eventUrl = eventId;
    return (
        <>
            <div className="flex shadow-md rounded-xl max-w-150">
                <div className="w-50 bg-[url('src/assets/kids_science_fair.jpg')] bg-cover bg-center rounded-t-xl"></div>
                <div className="p-4 w-full">
                    <div className="mb-2">
                        <span className="p-1 rounded-sm bg-blue-100 text-category-exatas text-xs">Evento</span>
                    </div>
                    <h1 className="text-l font-bold mb-2">{name}</h1>
                    <div className="text-xs mb-3 flex">
                        <span className="flex mr-4 items-center"><CalendarDays className="mr-1 size-5" />{date}</span>
                        <span className="flex items-center"><Clock className="mr-1 size-5" />{time}</span>
                    </div>
                    <p className="flex mb-2 text-xs"><MapPin className="mr-1 size-5" />{place}</p>
                    <a className={`text-sm text-secondary flex items-center ${!manage && 'p-4 border-2 border-secondary rounded-md'}`} href={eventUrl}>Visualizar evento<ArrowRight className="size-5 ml-1" /></a>
                    {manage &&
                        (<div className="mt-2 flex gap-2">
                            <Button width='[50%]' type='secondary' value='Editar' />
                            <Button width='[50%]' type='destructive' value='Excluir' />
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default EventCard;