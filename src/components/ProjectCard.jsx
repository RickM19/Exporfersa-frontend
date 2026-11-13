import { ArrowRight } from "lucide-react";

const ProjectCard = ({imageUrl, category, title, eventName, description, projectId, status, manage}) => {
    const projectUrl = projectId;
    return (
        <>
            <div className="shadow-md rounded-xl max-w-150">
                <div className="xl:h-30 md:h-40 sm:h-50 bg-[url('src/assets/people_on_table.jpg')] bg-cover bg-center rounded-t-xl"></div>
                <div className="p-4">
                    <div className="mb-2">
                        <span className="p-1 rounded-sm bg-blue-100 text-category-exatas text-xs">{category}</span>
                        {manage && <span>{status}</span>}
                    </div>
                    <h1 className="text-l font-bold mb-1">{title}</h1>
                    <p className="text-xs mb-1">Nome do evento - {eventName}</p>
                    <p className="text-xs mb-2">{description}</p>
                    <a className="text-xs text-secondary flex items-center" href={projectUrl}>Visualizar projeto <ArrowRight className="size-5 ml-1" /></a>
                    {manage &&
                        (<div>
                            <button>Editar</button>
                            <button>Excluit</button>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default ProjectCard;