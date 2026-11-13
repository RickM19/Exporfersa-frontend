import ProjectCard from "./ProjectCard"

const ProjectContainer = () => {
    return (
        <>
            <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5">
                <ProjectCard title='Titulo' category='Categoria' eventName='Evento' description='Lorem ipsum dolor sit amet' status='Aprovado' manage={true} />
                <ProjectCard title='Titulo' category='Categoria' eventName='Evento' description='Lorem ipsum dolor sit amet' status='Aprovado' manage={false} />
                <ProjectCard title='Titulo' category='Categoria' eventName='Evento' description='Lorem ipsum dolor sit amet' status='Aprovado' manage={false} />
            </div>
        </>
    )
}

export default ProjectContainer