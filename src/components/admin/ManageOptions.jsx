import { NavLink } from "react-router-dom";
import Button from "../../components/UI/Button";

const ManageOptions = () => {

  return(
    <nav className="w-fit px-2 flex flex-row items-center gap-5">
      <NavLink to={"/admin/eventos/criar"}>
         {({ isActive }) => (
          <Button 
            type="secondary"
            className={isActive ? "" : ""}
            value={"Eventos"}
          />
        )}
      </NavLink>
      <NavLink to={"/admin/submissoes"}>
         {({ isActive }) => (
          <Button 
            type="secondary"
            className={isActive ? "" : ""}
            value={"Projetos"}
          />
        )}
      </NavLink>
    </nav>
  );
}

export default ManageOptions;