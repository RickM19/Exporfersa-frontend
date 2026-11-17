import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { mockProjects } from "../mocks/projects";
import { mockEvents } from "../mocks/events";
import { mockUsers } from "../mocks/users";
import { Content } from "../components/Content";
import CreateEvent from "../pages/events/CreateEvent";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import EditEvent from "../pages/events/EditEvent";

const AppRoutes = () => {
  const [projects, setProjects] = useState(mockProjects);
  const [events, setEvents] = useState(mockEvents);
  const [users, setUsers] = useState(mockUsers);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<Home projects={projects} events={events} />} />
          <Route path="/admin/eventos/criar" element={<CreateEvent />} />
          <Route path="/admin/eventos/1/editar" element={<EditEvent eventoAntigo={{name: "Evento 1", place: "Rua do limoeiro, 210", date: "2026-11-17", time: "15:07", description: "lorem ipsum dolor sit amet"}} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
