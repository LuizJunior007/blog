import { CategorieProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

type Categorie = {
    categoria?: CategorieProps;
}

export default function ModalRemoveCategorie({ categoria }: Categorie){

    const { data, setData, clearErrors, delete: destroy } = useForm({
        id: 0,
    });

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        destroy(`/categorie/${data.id}`, {
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
            id: 0,
        });

        clearErrors();
    }

    useEffect(() => {

        if(categoria){

            setData({
                id: categoria.id,
            });

        }

    }, [categoria]);

    return(
        <div className="modal fade" id="modalRemoveCategorie" aria-labelledby="RemoveLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="RemoveLabel">Remover categoria</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        
                        <form>
                            <div>
                                Tem certeza que deseja remover essa categoria?
                            </div>    
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal} id="btnClose3">Fechar</button>
                        <button type="button" className="btn btn-danger" onClick={handleSubmit}>Remover</button>
                    </div>
                </div>
            </div>
        </div>
    );

}