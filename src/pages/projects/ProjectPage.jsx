import { useParams, Link } from "react-router-dom";
import { User, Users, Tag, ArrowLeft } from "lucide-react";
import GridContainer from "../../components/GridContainer";
import Card from "../../components/UI/Card";

const categoryLabels = {
  AGRARIAS: "Ciências Agrárias",
  ENGENHARIAS: "Engenharias",
  HUMANAS: "Ciências Humanas",
  EXATAS: "Ciências Exatas",
  BIOLOGICAS: "Ciências Biológicas",
  SOCIAIS_SAUDE: "Ciências Sociais e da Saúde"
};

const getYoutubeEmbedUrl = (url) => {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }

      if (parsedUrl.pathname.startsWith("/embed/")) {
        return url;
      }
    }

    if (parsedUrl.hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.slice(1);

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
  } catch {
    return null;
  }

  return null;
};

const ProjectPage = ({ projects = [] }) => {
  const { id } = useParams();

  const project = projects.find((project) => String(project.id) === id);

  if (!project) {
    return (
      <main className="flex flex-col items-center justify-center gap-4 py-16">
        <h1 className="text-2xl font-bold">Projeto não encontrado</h1>

        <p className="text-sm text-muted">
          O projeto solicitado não existe ou não está disponível.
        </p>

        <Link
          to="/projetos"
          className="flex items-center gap-2 text-sm text-secondary hover:underline"
        >
          <ArrowLeft size={16} />
          Voltar para projetos
        </Link>
      </main>
    );
  }

  const videoEmbedUrl = getYoutubeEmbedUrl(project.videoURL);

  const category = categoryLabels[project.category] || project.category;

  return (
    <main className="flex flex-col gap-8">
      {/* Cabeçalho */}
      <section className="flex flex-col gap-4">
        <span className="text-sm text-muted">
          Início / Projetos / {project.projectName}
        </span>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">{project.projectName}</h1>

          {/* Categoria */}
          <div className="flex items-center gap-2">
            <Tag size={16} className="text-secondary" />

            <span className="text-sm text-secondary">{category}</span>
          </div>
        </div>

        {/* Resumo */}
        <Card width="full">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Resumo</h2>

            <p className="text-sm text-muted leading-relaxed">
              {project.summary}
            </p>
          </div>
        </Card>
      </section>

      {/* Autores */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Users size={20} className="text-secondary" />
          Autores
        </h2>

        {project.authors?.length > 0 ? (
          <GridContainer>
            {project.authors.map((author, index) => (
              <Card key={`${author}-${index}`} width="full">
                <div className="flex items-center gap-3">
                  <User className="w-10 h-10 p-2 rounded-full bg-accent-foreground text-white" />

                  <span className="text-sm font-medium">{author}</span>
                </div>
              </Card>
            ))}
          </GridContainer>
        ) : (
          <p className="text-sm text-muted">Nenhum autor informado.</p>
        )}
      </section>

      {/* Descrição */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Descrição do projeto</h2>

        <Card width="full">
          <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
            {project.description || "Nenhuma descrição informada."}
          </p>
        </Card>
      </section>

      {/* Vídeo */}
      {videoEmbedUrl && (
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Apresentação em vídeo</h2>

          <div className="w-full max-w-200 aspect-video">
            <iframe
              src={videoEmbedUrl}
              title={`Apresentação do projeto ${project.projectName}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-full rounded-md"
            />
          </div>
        </section>
      )}

      {/* Galeria estática */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Galeria de imagens</h2>

        <div className="flex gap-3 overflow-x-auto pb-2">
          <img
            src="/src/assets/people_on_table.jpg"
            alt="Imagem do projeto"
            className="w-80 shrink-0 rounded-md"
          />

          <img
            src="/src/assets/people_on_table.jpg"
            alt="Imagem do projeto"
            className="w-80 shrink-0 rounded-md"
          />

          <img
            src="/src/assets/people_on_table.jpg"
            alt="Imagem do projeto"
            className="w-80 shrink-0 rounded-md"
          />
        </div>
      </section>

      {/* Comentários estáticos */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Comentários</h2>

        <div className="flex flex-col gap-5">
          {[
            {
              name: "Nome do visitante",
              date: "20/11/2026",
              message: "Excelente projeto! Parabéns pela iniciativa."
            },
            {
              name: "Nome do visitante",
              date: "20/11/2026",
              message: "Muito interessante a proposta apresentada!"
            },
            {
              name: "Nome do visitante",
              date: "20/11/2026",
              message: "Gostei bastante dos resultados apresentados."
            }
          ].map((comment, index) => (
            <Card key={index} width="full">
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <User className="w-10 h-10 p-2 rounded-full bg-accent-foreground text-white mr-2" />

                  <div>
                    <p className="text-sm font-bold">{comment.name}</p>

                    <span className="text-xs text-muted">{comment.date}</span>
                  </div>
                </div>

                <p className="text-sm">{comment.message}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
