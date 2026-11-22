import { School, User } from "lucide-react"
import Card from "../../components/UI/Card"
import { NavLink } from "react-router-dom";
import Button from "../../components/UI/Button";

const ManageAdvisors = () => {
    return (
        <main>
            <section className="flex flex-col gap-4 mb-5">
                <span className="text-sm text-muted block">Inicio / Gestão / Orientadores</span>
                <span className="text-secondary text-xs uppercase">Gestão da instituição</span>
                <h1 className="text-2xl font-bold">
                    Gerenciar orientadores
                </h1>
                <NavLink to={"/admin/orientadores/cadastrar"}>
                    <Button value="Cadastrar orientador" type="primary" />
                </NavLink>
            </section>
            <section className="flex flex-col gap-4">
                <Card width="full">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <User className="w-10 h-10 p-2 rounded-md bg-secondary-100 text-secondary mr-4" />
                            <div>
                                <p className="font-bold">Nome do orientador</p>
                                <p className="text-muted">Email não informado</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button type="secondary" value="Editar" />
                            <Button type="destructive" value="Excluir" />
                        </div>
                    </div>
                </Card>
                <Card width="full">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <User className="w-10 h-10 p-2 rounded-md bg-secondary-100 text-secondary mr-4" />
                            <div>
                                <p className="font-bold">Nome do orientador</p>
                                <p className="text-muted">Email não informado</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button type="secondary" value="Editar" />
                            <Button type="destructive" value="Excluir" />
                        </div>
                    </div>
                </Card>
                <Card width="full">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <User className="w-10 h-10 p-2 rounded-md bg-secondary-100 text-secondary mr-4" />
                            <div>
                                <p className="font-bold">Nome do orientador</p>
                                <p className="text-muted">Email não informado</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button type="secondary" value="Editar" />
                            <Button type="destructive" value="Excluir" />
                        </div>
                    </div>
                </Card>
            </section>
        </main>
    )
}

export default ManageAdvisors;