const Field = ({name, children}) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">{name}</h2>
            {children}
        </div>
    )
}

export default Field;