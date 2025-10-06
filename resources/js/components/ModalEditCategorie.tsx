import { CategorieProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

type Categorie = {
    categoria?: CategorieProps;
}

export default function ModalEditCategorie({ categoria }: Categorie){

    const { data, setData, errors, clearErrors, put } = useForm({
        id: 0,
        name: ''
    });

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        put(`/categorie/${data.id}`, {
            onSuccess: () => {

                if (document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur();
                }

                const btn = document.getElementById('btnClose2');
                if (btn) {
                    
                    btn.click();
                }

                closeModal();

            }
        });
    }

    const closeModal = () => {

        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }

        setData({
            id: 0,
            name: ''
        });

        clearErrors();
    }

    useEffect(() => {

        if(categoria){

            setData({
                id: categoria.id,
                name: categoria?.name
            });

        }

    }, [categoria]);

    return(
        <div className="modal fade" id="modalEditCategorie" aria-labelledby="editLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="editLabel">Editar categoria</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-floating mb-4 mb-lg-0">
                                        <input type="text" value={data.name} className="form-control" onChange={(e) => setData('name', e.target.value)} id="Ename" placeholder="Nome" />
                                        <label htmlFor="Ename">Nome</label>
                                        {
                                            errors.name && <small className='text-danger p-2'>{errors.name}</small>
                                        }
                                    </div> 
                                </div>    
                            </div>         
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal} id="btnClose2">Fechar</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Editar</button>
                    </div>
                </div>
            </div>
        </div>
    );

}