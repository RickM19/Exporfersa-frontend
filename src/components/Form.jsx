import Button from "./UI/Button"
import Card from "./UI/Card"

const Form = ({title, description, action, children, width, height}) => {

    return (
        <Card width={width} height={height}>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-muted text-sm mb-4">{description}</p>
            <form>
                <div className="flex flex-col gap-4 mb-4">{children}</div>
                <div className="flex flex-col">
                    <Button value={action} type='primary' />
                    <Button value='Cancelar' type='ghost' />
                </div>
            </form>
        </Card>
    );
};

export default Form;