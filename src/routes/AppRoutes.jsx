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
import CreateProject from "../pages/projects/CreateProject";
import EditProject from "../pages/projects/EditProject";
import ViewProjects from "../pages/projects/ViewProjects";
import ProjectPage from "../pages/projects/ProjectPage";
import ViewEvents from "../pages/events/ViewEvents";

const AppRoutes = () => {
  const [projects, setProjects] = useState(mockProjects);
  const [events, setEvents] = useState(mockEvents);
  const [users, setUsers] = useState(mockUsers);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<Home projects={projects} events={events} />} />
          <Route path="/projetos" element={<ViewProjects projects={projects} />} />
          <Route path="/projetos/criar" element={<CreateProject />} />
          <Route path="/projetos/1/editar" element={<EditProject />} />
          <Route path="/projetos/1" element={<ProjectPage />} />
          <Route path="/eventos" element={<ViewEvents events={events} />} />
          <Route path="/admin/eventos/criar" element={<CreateEvent />} />
          <Route path="/admin/eventos/1/editar" element={<EditEvent />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
