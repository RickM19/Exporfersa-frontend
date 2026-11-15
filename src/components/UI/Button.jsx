const Button = ({type, value, width}) => {
    return (
        <button className={`p-3 text-sm border-2 transition-all rounded-md ${width && `w-${width}`} ${
            type=='primary'?'text-white bg-secondary border-secondary hover:bg-secondary-800 hover:border-secondary-800':
            type=='secondary'?'text-secondary bg-white border-secondary hover:bg-secondary hover:text-white':
            type=='destructive' &&
            'text-white border-danger bg-danger hover:bg-red-800 hover:border-red-800'
            }`
        }>{value}</button>
    );
};

export default Button;