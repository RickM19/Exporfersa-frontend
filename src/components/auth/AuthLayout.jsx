import Card from "../UI/Card";

const AuthLayout = ({ breadcrumb, title, description, children }) => {
  return (
    <div className="flex flex-col gap-8">
      <span className="text-sm text-muted">Início / {breadcrumb}</span>

      <Card width="w-full max-w-[30rem]" className="mx-auto p-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 mb-6 text-text-secondary">{description}</p>
        {children}
      </Card>
    </div>
  );
};

export default AuthLayout;
