import AdminLayout from "@/components/AdminLayout";
import ModalEditUser from "@/components/ModalEditUser";
import Pagination from "@/components/Pagination";
import Toast from "@/components/Toast";
import { formartDate } from "@/lib/utils";
import { PaginatedResponse, User, UserProps } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import { ReactNode, useState } from "react";


export default function Users(){

    const { users } = usePage< {users: PaginatedResponse<UserProps> } >().props;
    const [user, setUser] = useState();

    const { flash }: any = usePage().props;

    async function getUser(id: number){

        try{

            const res = await fetch(`/user/${id}`)

            if(!res.ok){

                throw new Error('Erro ao tentar fazer requisição')
            }

            const data = await res.json();

            setUser(data);

        } catch(error){

            console.log(error);
        }
        
    }

    return(
        <>
            <Head>
                <title>Usuários</title>
                <meta name="description" content="Usuários" />
            </Head>

            <section>
                <h1>Usuários</h1>

                <div className="table-responsive p-3 border rounded bg-white shadow mt-3">
                    <table className="table table-striped align-middle">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Sobrenome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Acesso</th>
                                <th scope="col">Criado em</th>
                                <th scope="col">Atualizado em</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                users.data.length > 0
                                    ?
                                users.data.map((u) =>
                                    <tr key={u.id}>
                                        <td>{u.id}</td>
                                        <td>{u.name}</td>
                                        <td>{u.lastname}</td>
                                        <td>{u.email}</td>
                                        <td>
                                            {
                                                u.is_admin === 0 
                                                ?
                                                <span className="badge rounded-pill text-bg-primary">Usuário</span>
                                                :
                                                <span className="badge rounded-pill text-bg-success">Administrador</span>
                                            }
                                        </td>
                                        <td>{formartDate(u.created_at)}</td>
                                        <td>{formartDate(u.updated_at)}</td>
                                        <td>
                                            <button type="button" onClick={() => getUser(u.id)} className="btn" title="Editar" data-bs-target="#modalEditUser" data-bs-toggle="modal">
                                                <i className="bi bi-pen text-primary"></i>
                                            </button>

                                            <button type="button" className="btn" title="Remover">
                                                <i className="bi bi-trash text-danger"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                                    :
                                <tr>
                                    <td colSpan={8}>Nenhum usuário foi encontrado</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>

                <Pagination links={ users.links } />
            </section>

            {flash.success ? <Toast msg={ flash.success } /> : ''}
            <ModalEditUser user={user} />
        </>
    );

}

Users.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>