import AdminLayout from "@/components/AdminLayout";
import { Head, usePage } from "@inertiajs/react";
import { ReactNode, useEffect, useState } from "react";

export default function Users(){

    const { users } = usePage().props;

    return(
        <>
            <Head>
                <title>Usuários</title>
                <meta name="description" content="Usuários" />
            </Head>

            <section>
                <h1>Usuários</h1>

                <div className="table-responsive p-3 border rounded bg-white shadow mt-3">
                    <table className="table">
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
                                users.length > 0
                                    ?
                                users.map((u) =>
                                    <tr key={u.id}>
                                        <td>{u.id}</td>
                                        <td>{u.name}</td>
                                        <td>{u.lastname}</td>
                                        <td>{u.email}</td>
                                        <td>
                                            {
                                                u.is_admin === 0 
                                                ?
                                                'Usuário'
                                                :
                                                'Administrador'
                                            }
                                        </td>
                                        <td>{u.created_at}</td>
                                        <td>{u.updated_at}</td>
                                        <td>
                                            Ações
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
            </section>
        </>
    );

}

Users.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>