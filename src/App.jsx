import { Route, Routes } from "react-router-dom";
import { Content } from "./components/Content";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";
import { mockProjects } from "./mocks/projects";
import { mockEvents } from "./mocks/events";
import { mockUsers } from "./mocks/users";
import CreateEvent from "./pages/events/CreateEvent";

function App() {
  const [projects, setProjects] = useState(mockProjects);
  const [events, setEvents] = useState(mockEvents);
  const [users, setUsers] = useState(mockUsers);
  return (
    <Routes>
      <Route path="/" element={<Content />}>
        <Route index element={<Home projects={projects} events={events} />} />
        <Route path="/admin/eventos/criar" element={<CreateEvent />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
