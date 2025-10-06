import { useForm } from "@inertiajs/react";
import Editor from "./Editor";

export default function ModalNewPost(){

    const { data, setData, errors } = useForm({
        title: '',
        category: '',
        content: ''
    });

    const handleChange = (e: any) => {

        setData(e.target.name, e.target.value);

    }

    return(
        <div className="modal fade" id="modalNewPost" aria-labelledby="addLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addLabel">Novo post</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        
                        <form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-floating mb-4">
                                        <input type="text" value={data.title} autoComplete="off" name="title" className="form-control" onChange={handleChange} id="title" placeholder="Titulo" />
                                        <label htmlFor="title">Título</label>
                                        {
                                            errors.title && <small className='text-danger'>{errors.title}</small>
                                        }
                                    </div> 
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-floating mb-4">
                                        <select name="category" value={data.category} onChange={handleChange} id="category" className="form-select">
                                            <option value="">Selecione</option>
                                            <option value="Bolos">Bolos</option>
                                            <option value="Massas">Massas</option>
                                        </select>
                                        <label htmlFor="category">Categoria</label>
                                        {
                                            errors.category && <small className='text-danger'>{errors.category}</small>
                                        }
                                    </div> 
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="">Conteúdo</label>
                                    <Editor onChange={(value: any) => setData('content', value)} value={ data.content } />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="btnClose">Fechar</button>
                        <button type="button" className="btn btn-primary">Publicar</button>
                    </div>
                </div>
            </div>
        </div>
    );

}