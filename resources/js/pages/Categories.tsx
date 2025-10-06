import AdminLayout from "@/components/AdminLayout";
import ModalAddCategorie from "@/components/ModalAddCategorie";
import ModalEditCategorie from "@/components/ModalEditCategorie";
import ModalRemoveCategorie from "@/components/ModalRemoveCategorie";
import Pagination from "@/components/Pagination";
import { CategorieProps, PaginatedResponse } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import { ReactNode, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Categories(){

    const { flash }:any = usePage().props;
    const { categories }  = usePage<{ categories: PaginatedResponse<CategorieProps> }>().props;
    const [ categorie, setCategorie ] = useState();
    
    const handleGetCategorie = async (id: number) => {

        try{

            const res = await fetch(`/categorie/${id}`)

            if(!res.ok){

                throw new Error('Error');
            }

            const data = await res.json();

            setCategorie(data);

        } catch(error){

            console.log(error);
        }

    }

    useEffect(() => {   

        if(flash.success){

            toast.success(flash.success);

        }

        if(flash.error){

            toast.error(flash.error);
        }

    }, [flash]);

    return(
        <>
            <Head>
                <title>Categorias</title>
            </Head>

            <section>
                <div className="row">
                    <div className="col-6">
                        <h1>Categorias</h1>
                    </div>

                    <div className="col-6 text-end">
                        <button type="button" className="btn btn-primary" data-bs-target="#modalAddCategorie" data-bs-toggle="modal">
                            <i className="bi bi-plus-lg"></i>
                        </button>
                    </div>
                </div>

                <div className="border bg-white rounded mt-3">

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
                                    <th scope="col">Nome</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    categories.data.length > 0
                                    ?
                                    categories.data.map((c) => 
                                        <tr key={c.id}>
                                            <td>{c.id}</td>
                                            <td>{c.name}</td>
                                            <td>
                                                <button type="button" className="btn" onClick={() => handleGetCategorie(c.id)} data-bs-target="#modalEditCategorie" data-bs-toggle="modal">
                                                    <i className="bi bi-pen text-primary"></i>
                                                </button>

                                                <button type="button" className="btn" data-bs-target="#modalRemoveCategorie" data-bs-toggle="modal" onClick={() => handleGetCategorie(c.id)}>
                                                    <i className="bi bi-trash text-danger"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                    :
                                    <tr>
                                        <td colSpan={3}>Nenhum categoria foi encontrada</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="table-head p-3">
                        <Pagination links={ categories.links } />
                    </div>
                </div>

                
            </section>

            <ToastContainer />

            <ModalAddCategorie />
            <ModalEditCategorie categoria={categorie} />
            <ModalRemoveCategorie categoria={ categorie } />
        </>
    );

}

Categories.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>