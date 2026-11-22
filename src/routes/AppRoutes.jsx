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
import ManageInstitutions from "../pages/institutions/ManageInstitutions";
import RegisterInstitution from "../pages/institutions/RegisterInstitution";
import EditInstitution from "../pages/institutions/EditInstitution";
import ManageAdvisors from "../pages/advisors/ManageAdvisors";
import RegisterAdvisor from "../pages/advisors/RegisterAdvisor";
import EditAdvisor from "../pages/advisors/EditAdvisor";

const AppRoutes = () => {
  const [projects, setProjects] = useState(mockProjects);
  const [events, setEvents] = useState(mockEvents);
  const [users, setUsers] = useState(mockUsers);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<Home projects={projects} events={events} />} />
          <Route
            path="/projetos"
            element={<ViewProjects projects={projects} />}
          />

          <Route path="/eventos" element={<ViewEvents events={events} />} />

          <Route
            path="/projetos"
            element={<ViewProjects projects={projects} />}
          />
          <Route path="projetos/:id" element={<ProjectPage />} />

          <Route element={<ProtectedRoute roles={["USER", "ADMIN"]} />}>
            <Route
              path="/meus-projetos"
              element={<ManageProjects projects={projects} />}
            />
            <Route path="projetos/criar" element={<CreateProject />} />
            <Route path="projetos/:id/editar" element={<EditProject />} />
          </Route>

          <Route element={<ProtectedRoute roles={["ADMIN"]} />}>
            <Route path="admin/eventos/criar" element={<CreateEvent />} />
            <Route path="admin/eventos/:id/editar" element={<EditEvent />} />
            <Route path="admin/instituicoes" element={<ManageInstitutions />} />
            <Route path="admin/instituicoes/cadastrar" element={<RegisterInstitution />} />
            <Route path="admin/instituicoes/:id/editar" element={<EditInstitution />} />
          </Route>

          {/* Orientador */}
          <Route path="admin/orientadores" element={<ManageAdvisors />} />
          <Route path="admin/orientadores/cadastrar" element={<RegisterAdvisor />} />
          <Route path="admin/orientadores/:id/editar" element={<EditAdvisor />} />

          <Route path="*" element={<NotFound />} />
          <Route path="/eventos/1" element={<EventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
