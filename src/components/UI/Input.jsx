const Input = ({
  name,
  label,
  type,
  placeholder,
  value,
  handleChange,
  options = [],
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-bold" htmlFor={name}>
        {label}
      </label>

      {type === "select" ? (
        <select
          className="border-2 rounded-sm p-2"
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          required
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          className="border-2 rounded-sm p-2"
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          {...props}
        />
      ) : (
        <input
          className="border-2 rounded-sm p-2"
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
