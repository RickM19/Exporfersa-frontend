import { cn } from "../../lib/cn";

const Card = ({
  children,
  className,
  width = "w-max",
  height = "h-max",
  ...props
}) => {
  return (
    <div
      className={cn("bg-white rounded-xl p-4 shadow", width, height, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
