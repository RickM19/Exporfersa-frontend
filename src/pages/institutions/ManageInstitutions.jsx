import { School } from "lucide-react"
import Card from "../../components/UI/Card"
import { NavLink } from "react-router-dom";
import Button from "../../components/UI/Button";

const ManageInstitutions = () => {
    return (
        <main>
            <section className="flex flex-col gap-4 mb-5">
                <span className="text-sm text-muted block">Inicio / Gestão / Instituições</span>
                <span className="text-secondary text-xs uppercase">Administração</span>
                <h1 className="text-2xl font-bold">
                    Gerenciar instituições
                </h1>
                <NavLink to={"/admin/instituicoes/cadastrar"}>
                    <Button value="Cadastrar instituição" type="primary" />
                </NavLink>
            </section>
            <section className="flex flex-col gap-4">
                <Card width="full">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <School className="w-10 h-10 p-2 rounded-md bg-secondary-100 text-secondary mr-4" />
                            <div>
                                <p className="font-bold">Nome da instituição</p>
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
                            <School className="w-10 h-10 p-2 rounded-md bg-secondary-100 text-secondary mr-4" />
                            <div>
                                <p className="font-bold">Nome da instituição</p>
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
                            <School className="w-10 h-10 p-2 rounded-md bg-secondary-100 text-secondary mr-4" />
                            <div>
                                <p className="font-bold">Nome da instituição</p>
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

export default ManageInstitutions;