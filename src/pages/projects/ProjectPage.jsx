import { User } from "lucide-react";
import GridContainer from "../../components/GridContainer";
import Card from "../../components/UI/Card";

const ProjectPage = () => {
  return (
    <>
    <main className="flex gap-4 flex-col">
      
        <section className="flex flex-col gap-4">
            <span className="text-sm text-muted block">Inicio / Detalhes do projeto</span>
            <h1 className="text-2xl font-bold">Título do projeto</h1>
            <h2 className="text-xl font-bold">Resumo</h2>
            <p className="text-sm text-shadow-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum minus non amet saepe, possimus a! Ipsam reprehenderit vitae debitis?</p>
        </section>
        <section>
            <h2 className="text-xl font-bold my-6">Apresentação em vídeo</h2>
            <iframe
                src="https://www.youtube.com/embed/uXWycyeTeCs"
                title="A YouTube video on React hooks"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
                className="max-w-200 aspect-video"
            >
            </iframe>
        </section>
        <section>
            <h2 className="text-xl font-bold my-6">Galeria de imagens</h2>
            <div className="flex gap-2 overflow-x-scroll">
                <img src="/src/assets/people_on_table.jpg" className="w-80 rounded-md" />
                <img src="/src/assets/people_on_table.jpg" className="w-80 rounded-md" />
                <img src="/src/assets/people_on_table.jpg" className="w-80 rounded-md" />
            </div>
        </section>
        <section>
            <h2 className="text-xl font-bold my-6">Comentários</h2>
            <div className="flex flex-col gap-5">
                <Card width="full">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center">
                            <User className="w-10 h-10 p-2 rounded-full bg-accent-foreground text-white mr-2" />
                            <div>
                                <p className="text-sm font-bold">Nome do visitante</p>
                                <span className="text-xs text-muted">20/11/2026</span>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, blanditiis. 👍</p>
                    </div>
                </Card>
                <Card width="full">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center">
                            <User className="w-10 h-10 p-2 rounded-full bg-accent-foreground text-white mr-2" />
                            <div>
                                <p className="text-sm font-bold">Nome do visitante</p>
                                <span className="text-xs text-muted">20/11/2026</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit 🤣 Similique officia ex quisquam doloribus dignissimos libero qui soluta pariatur corporis veniam?</p>
                    </div>
                </Card>
                <Card width="full">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center">
                            <User className="w-10 h-10 p-2 rounded-full bg-accent-foreground text-white mr-2" />
                            <div>
                                <p className="text-sm font-bold">Nome do visitante</p>
                                <span className="text-xs text-muted">20/11/2026</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit (┬┬﹏┬┬) Atque at veritatis veniam, ad blanditiis perspiciatis?</p>
                    </div>
                </Card>
            </div>
        </section>
      </main>
    </>
  );
};

export default ProjectPage;