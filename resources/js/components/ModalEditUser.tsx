import { UserProps } from "@/types";
import { router, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";

type User = {
    user?: UserProps;
}

export default function ModalEditUser({ user }: User){
    
    const { data, setData, errors, reset, clearErrors, put } = useForm({
        id: 0,
        name: '',
        lastname: '',
        email: '',
        is_admin: 0 
    });

    const handleChange = (e: { target: { id: any; value: any; }; }) => {

        setData(e.target.id, e.target.value);

    }

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        put(`/user/${data.id}`, {
            onSuccess: () => {

                const btn = document.getElementById('btnClose');
                if (btn) {
                    
                    btn.click();
                }

                closeModal();

            }
        });
    }

    const closeModal = () => {

        reset();
        clearErrors();
    }

    useEffect(() => {

        if(user){
            setData({
                id: user.id,
                name: user?.name,
                lastname: user.lastname,
                email: user.email,
                is_admin: user.is_admin
            });
        }

    }, [user]);

    return(
        <div className="modal fade" id="modalEditUser" aria-labelledby="editLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="editLabel">Editar usuário</h1>
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
                                        <input type="text" value={data.is_admin} className="form-control" onChange={handleChange} id="is_admin" placeholder="Acesso" />
                                        <label htmlFor="is_admin">Acesso</label>
                                        {
                                            errors.is_admin && <small className='text-danger'>{errors.is_admin}</small>
                                        }
                                    </div> 
                                </div>
                            </div>                   
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal} id="btnClose">Fechar</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    );

}