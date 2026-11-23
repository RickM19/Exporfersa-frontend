import { useState } from "react"
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/cn";

const Collapse = ({title, description, className, select, selectOptions=[], children, ...props}) => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div 
      className={cn("w-full bg-white border border-border rounded-lg p-6 flex flex-col gap-3", className)} 
      {...props}
    >
      <section 
        className={`w-full flex flex-row gap-5 items-center ${isOpen ? "pb-2 border-b-[1.5px] border-border" : ""}`}
      >
        <h3 className="font-semibold text-xl text-primary">{title}</h3>
        <p className="text-base text-text-secondary col-start-1 row-start-2">{description? description : ""}</p>
        { select && 
          <select className="text-sm bg-background border border-border rounded-md p-2">
            <option value="">Tudo</option>
            {selectOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.name}
              </option>
            ))}
          </select> 
        }
        <button
          type="button"
          className="ml-auto col-start-3"
          onClick={() => { setIsOpen((prev) => !prev) }}
        >
          <ChevronDown
            size={20}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </section>
      { isOpen && children }
    </div>
  );
}

export default Collapse;