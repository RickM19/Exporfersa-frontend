import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import { useAuth } from "../../hooks/useAuth";
import UserMenu from "./UserMenu";
import { LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const { user, isAuthenticated } = useAuth();
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
                `flex items-center h-full border-b-2 text-sm font-medium ${
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
                `flex items-center h-full border-b-2 text-sm font-medium ${
                  isActive
                    ? "text-secondary-600 font-semibold border-b-2 border-secondary-600 h-full"
                    : "text-text-secondary border-transparent"
                }`
              }
            >
              Projetos
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              to={"/eventos"}
              className={({ isActive }) =>
                `flex items-center h-full border-b-2 text-sm font-medium ${
                  isActive
                    ? "text-secondary-600 font-semibold border-b-2 border-secondary-600 h-full"
                    : "text-text-secondary border-transparent"
                }`
              }
            >
              Eventos
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        {!isAuthenticated ? (
          <NavLink to={"/login"} end>
            <Button value={"Login"} className="font-semibold text-sm">
              Login
            </Button>
          </NavLink>
        ) : (
          <div className="flex items-center gap-3">
            {user?.role === "ADMIN" && (
              <NavLink
                to="admin/gestao"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg
            text-sm font-medium transition-colors  ${
              isActive
                ? "text-secondary-600 bg-surface-secondary"
                : "text-text-secondary hover:text-text-primary hover:bg-surface-secondary"
            }`
                }
              >
                <LayoutDashboard size={16} />
                Gestão
              </NavLink>
            )}
            <UserMenu />
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
