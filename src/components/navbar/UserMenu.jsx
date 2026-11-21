import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, LogOut, UserRound, FolderKanban } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    setIsOpen(false);
    logout();
  };

  return (
    <div className="relative h-full w-fit flex items-center shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="flex items-center gap-2 px-3 py-2 rounded-lg
          text-text-secondary hover:text-text-primary
          hover:bg-surface-secondary transition-colors"
      >
        <UserRound size={22} />

        <span className="text-sm font-medium">
          {user?.username.split(" ")[0]}
        </span>

        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Fechar menu"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setIsOpen(false)}
          />

          <div
            role="menu"
            className="absolute right-0 top-full mt-2 z-50
              w-48 overflow-hidden rounded-xl
              border border-border bg-surface shadow-lg"
          >
            <NavLink
              to="/perfil"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3
                text-sm text-text-secondary
                hover:bg-surface-secondary hover:text-text-primary
                transition-colors"
            >
              <UserRound size={17} />
              Minha conta
            </NavLink>

            <NavLink
              to="meus-projetos"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3
                text-sm text-text-secondary
                hover:bg-surface-secondary hover:text-text-primary
                transition-colors"
            >
              <FolderKanban size={17} />
              Meus projetos
            </NavLink>

            <div className="h-px bg-border mx-2" />

            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3
                text-sm text-danger
                hover:bg-surface-secondary transition-colors"
            >
              <LogOut size={17} />
              Sair
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserMenu;
