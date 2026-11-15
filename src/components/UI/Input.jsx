const Input = ({name, label, type, placeholder}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-bold" htmlFor={name}>{label}</label>
            {type !== "textarea" ? 
                <input className="border-2 rounded-sm p-2" name={name} id={name} type={type} placeholder={placeholder} />:
                <textarea className="border-2 rounded-sm p-2" name={name} id={name} placeholder={placeholder}></textarea>
            }
            
        </div>
    );
};

export default Input;