import { ArrowRight } from "lucide-react";

const ProjectCard = ({imageUrl, category, title, eventName, description, projectId, status, manage}) => {
    const projectUrl = projectId;
    return (
        <>
            <div className="shadow-md rounded-xl max-w-150">
                <div className="xl:h-30 md:h-40 sm:h-50 bg-[url('src/assets/people_on_table.jpg')] bg-cover bg-center rounded-t-xl"></div>
                <div className="p-4">
                    <div className="mb-2 flex justify-between">
                        <span className="p-1 rounded-sm bg-blue-100 text-category-exatas text-xs">{category}</span>
                        {manage && <span className="p-1 rounded-sm bg-green-100 text-green-700 text-xs">{status}</span>}
                    </div>
                    <h1 className="text-l font-bold mb-1">{title}</h1>
                    <p className="text-xs mb-1">Nome do evento - {eventName}</p>
                    <p className="text-xs mb-2">{description}</p>
                    <a className="text-sm text-secondary flex items-center cursor-pointer" href={projectUrl}>Visualizar projeto <ArrowRight className="size-5 ml-1" /></a>
                    {manage &&
                        (<div className="mt-2 flex gap-2">
                            <button className="w-[50%] text-secondary p-3 border-2 border-secondary rounded-md hover:text-white hover:bg-secondary transition-all">Editar</button>
                            <button className="w-[50%] text-white p-3 border-2 border-danger bg-danger rounded-md hover:bg-red-800 hover:border-red-800 transition-all">Excluir</button>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default ProjectCard;