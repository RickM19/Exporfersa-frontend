import EventCard from "./EventCard";

const EventContainer = () => {
    return (
        <>
            <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5">
                <EventCard name='Evento' date='13/11/2026' time='14:05' place='Ufersa' manage={false} />
                <EventCard name='Evento' date='13/11/2026' time='14:05' place='Ufersa' manage={false} />
                <EventCard name='Evento' date='13/11/2026' time='14:05' place='Ufersa' manage={false} />
            </div>
        </>
    );
};

export default EventContainer;