import AdminLayout from "@/components/AdminLayout";
import ModalNewPost from "@/components/ModalNewPost";
import { Head } from "@inertiajs/react";
import { ReactNode } from "react";

export default function Posts(){

    return(
        <>
            <Head>
                <title>Posts</title>
            </Head>

            <div className="row">
                <div className="col-6">
                    <h1>Posts</h1>
                </div>

                <div className="col-6 text-end">
                    <button type="button" className="btn btn-primary" data-bs-target="#modalNewPost" data-bs-toggle="modal">
                        <i className="bi bi-plus-lg"></i>
                    </button>
                </div>
            </div>

            <section>
                <div className="border rounded mt-3 bg-white">

                    <div className="table-head p-3">
                        <div>
                            <input type="search" className="form-control" placeholder="Pesquisar" />
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Título</th>
                                    <th scope="col">Categorias</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td colSpan={4}>Nenhum post foi encontrado</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <ModalNewPost />
        </>
    );

}

Posts.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>