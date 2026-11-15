import { ArrowRight } from "lucide-react";
import Button from "../UI/Button";
import defaultProjectImage from "../../assets/people_on_table.jpg";
import { NavLink } from "react-router-dom";

const ProjectCard = ({
  imageUrl,
  category,
  title,
  eventName,
  summary,
  projectId,
  status,
  manage
}) => {
  const projectUrl = `/projetos/${projectId}`;
  return (
    <>
      <div className="shadow-md rounded-xl max-w-150 overflow-hidden">
        <img
          src={imageUrl || defaultProjectImage}
          alt={`Imagem do projeto ${title}`}
          className="w-full xl:h-30 md:h-40 sm:h-50 object-cover object-center"
        />
        <div className="p-4">
          <div className="mb-2 flex justify-between">
            <span className="p-1 rounded-sm bg-blue-100 text-category-exatas text-xs">
              {category}
            </span>
            {manage && (
              <span className="p-1 rounded-sm bg-green-100 text-green-700 text-xs">
                {status}
              </span>
            )}
          </div>
          <h1 className="text-l font-bold mb-1">{title}</h1>
          <p className="text-xs mb-1">Nome do evento - {eventName}</p>
          <p className="text-xs mb-2">{summary}</p>
          <NavLink
            className="text-sm text-secondary flex items-center cursor-pointer"
            to={projectUrl}
          >
            Visualizar projeto <ArrowRight className="size-5 ml-1" />
          </NavLink>
          {manage && (
            <div className="mt-2 flex gap-2">
              <Button value="Editar" type="secondary" width="[50%]" />
              <Button value="Excluir" type="destructive" width="[50%]" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
