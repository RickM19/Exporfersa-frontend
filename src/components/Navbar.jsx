import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 left-0 w-full h-20 px-16 flex items-center justify-between border-b border-border bg-surface">
      <div className="flex items-center gap-10 h-full">
        <span className="flex items-center gap-2">
          <h1 className="tracking-tight font text-2xl">ExporFersa</h1>
          <span className="size-1.5 bg-success rounded-xs" />
        </span>
        <ul className="flex items-center gap-8 h-full">
          <li className="h-full">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `flex items-center h-full border-b-2 ${
                  isActive
                    ? "text-secondary-600 font-semibold border-b-2 border-secondary-600 h-full"
                    : "text-text-secondary border-transparent"
                }`
              }
              end
            >
              Início
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              to={"/projetos"}
              className={({ isActive }) =>
                `flex items-center h-full border-b-2 ${
                  isActive
                    ? "text-secondary-600 font-semibold border-b-2 border-secondary-600 h-full"
                    : "text-text-secondary border-transparent"
                }`
              }
              end
            >
              Projetos
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              to={"/eventos"}
              className={({ isActive }) =>
                `flex items-center h-full border-b-2 ${
                  isActive
                    ? "text-secondary-600 font-semibold border-b-2 border-secondary-600 h-full"
                    : "text-text-secondary border-transparent"
                }`
              }
              end
            >
              Eventos
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <NavLink to={"/login"} end>
          <button className="bg bg-secondary px-4 py-3 text-surface rounded-md font-semibold">
            Login
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export { Navbar };
