const GridContainer = ({children}) => {
    return (
        <>
            <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {children}
            </div>
        </>
    );
};

export default GridContainer;