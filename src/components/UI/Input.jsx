const Input = ({name, label, type, placeholder, value, handleChange}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-bold" htmlFor={name}>{label}</label>
            {type !== "textarea" ? 
                <input className="border-2 rounded-sm p-2" name={name} id={name} type={type} placeholder={placeholder} value={value} onChange={handleChange} />:
                <textarea className="border-2 rounded-sm p-2" name={name} id={name} placeholder={placeholder} value={value} onChange={handleChange}></textarea>
            }
            
        </div>
    );
};

export default Input;