import { PlusCircle, Search, Section } from "lucide-react";
import AdminLayout from "../../components/admin/AdmimLayout";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { mockEvents } from "../../mocks/events";
import EventCard from "../../components/events/EventCard";
import { NavLink } from "react-router-dom";

const EventOverview = () => {
  return(
    <AdminLayout 
      breadcrumb="Gerenciar eventos" 
      title="Gerenciar eventos" 
      description="Consulte e gerencie os eventos da plataforma"
    >
      <div className="w-full p-4 bg-white rounded-xl flex flex-row justify-between gap-12">
        <div className="w-full relative">
          <Search className="absolute bottom-2.5 right-2" />
          <Input
            label="Pesquisar"
            placeholder="Pesquisar pelo nome do evento"
          />
        </div>
        <NavLink to="/admin/eventos/criar" className="h-3/4 self-center" >
          <Button
            value={
              <div className="flex flex-row gap-2 items-center">
                <PlusCircle />
                <p>Cadastrar</p>
              </div>
            }
          />
        </NavLink>
      </div>
      <div className="w-full p-8 rounded-xl bg-white grid grid-cols-2 gap-4">
        { mockEvents.map((item) => (
          <EventCard 
            eventId={item.id}
            startDate={item.dates.startDate}
            endDate={item.dates.endDate}
            startTime={item.hours.startTime}
            closeTime={item.hours.closeTime}
            {...item} 
            manage={true}
          />
        ))}
      </div>
    </AdminLayout>
  );
}

export default EventOverview;
