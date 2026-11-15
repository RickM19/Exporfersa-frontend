import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

const Content = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 h-full">
        <Outlet />
      </main>
    </div>
  );
};

export { Content };
