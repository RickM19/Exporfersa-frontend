import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function PublicRoute() {
  const { status } = useAuth();
  const location = useLocation();

  if (status === "loading") {
    return <div>Carregando...</div>;
  }

  if (status === "error") {
    return (
      <div>
        Não foi possível verificar sua autenticação. Atualize a página e tente
        novamente.
      </div>
    );
  }

  if (status === "authenticated") {
    return <Navigate to={location.state?.from?.pathname ?? "/"} replace />;
  }

  return <Outlet />;
}
