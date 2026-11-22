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
import ManageProjects from "../pages/projects/ManageProjects";
import ViewEvents from "../pages/events/ViewEvents";
import EventPage from "../pages/events/EventPage";
import { ProtectedRoute } from "../components/routes/ProtectedRoute";

const AppRoutes = () => {
  const [projects, setProjects] = useState(mockProjects);
  const [events, setEvents] = useState(mockEvents);
  const [users, setUsers] = useState(mockUsers);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<Home projects={projects} events={events} />} />

          <Route path="/eventos" element={<ViewEvents events={events} />} />
          <Route path="/eventos/1" element={<EventPage />} />

          <Route
            path="/projetos"
            element={<ViewProjects projects={projects} />}
          />
          <Route
            path="projetos/:id"
            element={<ProjectPage projects={projects} />}
          />

          <Route element={<ProtectedRoute roles={["USER", "ADMIN"]} />}>
            <Route
              path="/meus-projetos"
              element={
                <ManageProjects projects={projects} setProjects={setProjects} />
              }
            />
            <Route
              path="meus-projetos/cadastrar"
              element={
                <CreateProject
                  events={events}
                  setProjects={setProjects}
                  projects={projects}
                />
              }
            />
            <Route path="meus-projetos/:id/editar" element={<EditProject />} />
          </Route>

          <Route element={<ProtectedRoute roles={["ADMIN"]} />}>
            <Route path="admin/eventos/criar" element={<CreateEvent />} />
            <Route path="admin/eventos/:id/editar" element={<EditEvent />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
