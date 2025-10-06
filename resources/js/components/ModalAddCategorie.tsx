import { useForm } from "@inertiajs/react";

export default function ModalAddCategorie(){

    const { data, setData, errors, clearErrors, post } = useForm({
        name: ''
    });

    const handleChange = (e: { target: { id: any; value: any; }; }) => {

        setData(e.target.id, e.target.value);
    }

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        post('/categorie', {

            onSuccess: () => {

                if (document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur();
                }

                const btn = document.getElementById('btnClose');
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
            name: ''
        });

        clearErrors();
    }

    return(

        <div className="modal fade" id="modalAddCategorie" aria-labelledby="editLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="editLabel">Nova categoria</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-floating mb-4 mb-lg-0">
                                        <input type="text" value={data.name} autoComplete="off" className="form-control" onChange={handleChange} id="name" placeholder="Nome" />
                                        <label htmlFor="name">Nome</label>
                                        {
                                            errors.name && <small className='text-danger p-2'>{errors.name}</small>
                                        }
                                    </div> 
                                </div>    
                            </div>         
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal} id="btnClose">Fechar</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Adicionar</button>
                    </div>
                </div>
            </div>
        </div>

    );

}