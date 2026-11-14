const Card = ({children}) => {
    return (
        <div className="bg-white rounded-xl p-4 my-4">
            {children}
        </div>
    );
};

export default Card;