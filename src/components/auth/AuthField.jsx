import { cn } from "../../lib/cn";

const AuthField = ({ id, label, error, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 text-sm font-semibold">
        {label}
      </label>

      <input
        id={id}
        name={id}
        className={cn(
          "rounded-md border border-input px-3 py-2.5 placeholder:text-muted",
          error && "border-danger"
        )}
        {...props}
      />

      <p className="mt-1 min-h-5 text-xs text-danger">{error}</p>
    </div>
  );
};

export default AuthField;
