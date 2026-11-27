import LoadingSpinner from "./LoadingSpinner";

const LayoutContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-32 text-muted text-sm">
      {children}
    </div>
  );
};

const RequestState = ({
  loading,
  error,
  empty,
  loadingMessage = "Carregando...",
  errorMessage = "Não foi possível carregar os dados.",
  children
}) => {
  if (loading) {
    return (
      <LayoutContainer>
        <LoadingSpinner />
        {loadingMessage}
      </LayoutContainer>
    );
  }

  if (error) {
    return <LayoutContainer>{errorMessage}</LayoutContainer>;
  }

  if (empty) {
    return <LayoutContainer>{empty}</LayoutContainer>;
  }

  return children;
};

export default RequestState;
