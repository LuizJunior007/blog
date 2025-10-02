import { useForm } from "@inertiajs/react";
import { User } from "./ModalEditUser";
import { useEffect } from "react";

export default function ModalRemoveUser({ user }: User){

    const { data, setData, clearErrors, reset, delete: destroy } = useForm({
        id: 0,
        name: '',
        lastname: '',
        email: '',
        is_admin: 0 
    });

    const closeModal = () => {

        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }

        reset();
        clearErrors();
    }

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        destroy(`/user/${data.id}`, {
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
        <div className="modal fade" id="modalRemoveUser" aria-labelledby="editLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="editLabel">Remover usuário</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        
                        <form>
                            <div>
                                Tem certeza que deseja remover esse usuário?    
                            </div>          
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal} id="btnClose2">Fechar</button>
                        <button type="button" className="btn btn-danger" onClick={handleSubmit}>Remover</button>
                    </div>
                </div>
            </div>
        </div>
    )
}