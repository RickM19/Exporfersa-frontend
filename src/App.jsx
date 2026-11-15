import { Route, Routes } from "react-router-dom";
import { Content } from "./components/Content";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import CreateEvent from "./pages/events/CreateEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Content />}>
        <Route index element={<Home />} />
        <Route path="/admin/events/create" element={<CreateEvent />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
