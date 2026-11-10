import { Route, Routes } from "react-router-dom";
import { Content } from "./components/Content";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Content />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
