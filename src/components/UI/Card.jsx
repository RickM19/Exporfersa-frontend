const Card = ({children, width, height}) => {
    return (
        <div
            style={{
                width: width || "max-content",
                height: height || "max-content"
            }}
            className={"bg-white rounded-xl p-4 shadow"}>
            {children}
        </div>
    );
};

export default Card;