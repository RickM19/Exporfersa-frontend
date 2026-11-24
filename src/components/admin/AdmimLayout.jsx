import { cn } from "../../lib/cn"
import AdminNavigation from "./AdminNavigation";

const AdminLayout = ({breadcrumb, title, description, className, children}) => {
  return(
    <div className={cn("h-full w-full gap-8 flex flex-col", className)}>
      <span className="text-sm text-muted">Início / administração / {breadcrumb}</span>
      <div className="w-full px-3 py-2 flex flex-row justify-between items-center">

        <section className="flex flex-col gap-1">
          <p className="font-semibold text-xs text-secondary">Administração</p>
          <h1 className="text-3xl font-bold my-2">{title}</h1>
          <p className="text-xs text-text-secondary">{description}</p>
        </section>
        
        <AdminNavigation />

      </div>
      {children}
    </div>
  );
}

export default AdminLayout;
