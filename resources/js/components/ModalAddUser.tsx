import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function ModalAddUser(){

    const { data, setData, errors, clearErrors, post, reset } = useForm({
        name: '',
        lastname: '',
        email: '',
        password: '' 
    });

    const handleChange = (e: { target: { id: any; value: any; }; }) => {

        setData(e.target.id, e.target.value);

    }

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        post(`/signup`, {
            onSuccess: () => {

                if (document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur();
                }

                const btn = document.getElementById('btnClose3');
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
            name: '',
            lastname: '',
            email: '',
            password: ''
        });

        clearErrors();
    }

    return(
        <div className="modal fade" id="modalAddUser" aria-labelledby="addLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addLabel">Adicionar usuário</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        
                        <form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-floating mb-4">
                                        <input type="text" value={data.name} className="form-control" onChange={handleChange} id="name" placeholder="Nome" />
                                        <label htmlFor="name">Nome</label>
                                        {
                                            errors.name && <small className='text-danger'>{errors.name}</small>
                                        }
                                    </div> 
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-floating mb-4">
                                        <input type="text" value={data.lastname} className="form-control" onChange={handleChange} id="lastname" placeholder="Nome" />
                                        <label htmlFor="lastname">Sobrenome</label>
                                        {
                                            errors.lastname && <small className='text-danger'>{errors.lastname}</small>
                                        }
                                    </div> 
                                </div>    
                            </div>

                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="form-floating mb-4">
                                        <input type="text" value={data.email} className="form-control" onChange={handleChange} id="email" placeholder="Email" />
                                        <label htmlFor="email">Email</label>
                                        {
                                            errors.email && <small className='text-danger p-2'>{errors.email}</small>
                                        }
                                    </div> 
                                </div>

                                <div className="col-lg-4">
                                    <div className="form-floating mb-4">
                                        <input type="password" value={data.password} className="form-control" onChange={handleChange} id="password" placeholder="Acesso" />
                                        <label htmlFor="password">Senha</label>
                                        {
                                            errors.password && <small className='text-danger'>{errors.password}</small>
                                        }
                                    </div> 
                                </div>
                            </div>                   
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal} id="btnClose3">Fechar</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Adicionar</button>
                    </div>
                </div>
            </div>
        </div>
    );

}