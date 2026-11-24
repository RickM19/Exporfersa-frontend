import { NavLink } from "react-router-dom";
import Button from "../UI/Button";

const AdminNavButton = ({name, to}) => {
  return(
    <NavLink to={to}>
      {({ isActive }) => (
      <Button 
        className={
          isActive 
          ? "border-0 border-b-2 bg-linear-to-b from-background from-70% to-primary-300 to-100% text-primary" 
          : "border-0 bg-background text-text-primary"
        }
        disable={isActive.toString()}
        value={name}
      />
      )}
    </NavLink>
  );
}

export default AdminNavButton;
