import { cn } from "../../lib/cn";

const variants = {
  primary:
    "text-white bg-secondary border-secondary hover:bg-secondary-800 hover:border-secondary-800",

  secondary:
    "text-secondary bg-white border-secondary hover:bg-secondary hover:text-white",

  destructive:
    "text-white border-danger bg-danger hover:bg-red-800 hover:border-red-800"
};

const Button = ({ type = "primary", value, width, className, ...props }) => {
  return (
    <button
      className={cn(
        "p-3 text-sm border-2 transition-all rounded-md",
        variants[type] ?? variants.primary,
        width,
        className
      )}
      {...props}
    >
      {value}
    </button>
  );
};

export default Button;
