import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Compass size={32} strokeWidth={1.7} />
      </div>

      <span className="text-8xl font-bold tracking-tighter text-primary sm:text-9xl">
        404
      </span>

      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Página não encontrada
      </h1>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        Parece que você tentou acessar uma página que não existe ou foi movida.
        Verifique o endereço ou retorne ao início.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <ArrowLeft size={17} />
        Voltar ao início
      </Link>

      <span className="mt-12 text-xs text-muted-foreground">
        ExporFersa · Plataforma de Exposições Científicas
      </span>
    </main>
  );
};

export { NotFound };
