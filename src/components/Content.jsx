import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./Footer";

const Content = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-16 h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { Content };
