import AdminNavButton from "./AdminNavButton";

const AdminNavigation = () => {
  return(
    <nav className="w-fit px-2 flex flex-row items-center gap-5">
      <AdminNavButton
        name="Visão geral" 
        to="/admin/gestao"
      />
      <AdminNavButton
        name="Eventos"
        to="/admin/eventos"
      />
      <AdminNavButton
        name="Projetos"
        to="/admin/projetos"
      />
      <AdminNavButton
        name="Orientadores"
        to="/admin/orientadores"
      />
    </nav>
  );
}

export default AdminNavigation;