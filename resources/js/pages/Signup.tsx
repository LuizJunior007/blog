import Layout from '@/components/Layout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { ReactNode, useState } from 'react';

export default function Signup(){

     const { errors } = usePage().props;
    
    const [ values, setValues ] = useState({
        name: '',
        lastname: '',
        email: '',
        password: ''
    });

    function handleChange(e: { target: { id: any; value: any; }; }) {
        
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e: { preventDefault: () => void; }){

        e.preventDefault();

        router.post('/signup', values, {
            onSuccess: () => {
                setValues({
                    name: '',
                    lastname: '',
                    email: '',
                    password: ''
                });

                alert('Cadastro realizado com sucesso')
            }
        });
    }

    return(
        <>
            <Head>
                <title>Cadastro</title>
                <meta name="description" content="Faça login para ter acesso a todo o conteúdo do blog" />
            </Head>

            <section className="d-flex flex-column align-items-center justify-content-center">
                <div className="login-form">
                    <div className="mb-4 text-center">
                        <h1>Cadastre-se</h1>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="row">
                            <div className="col-md-6">
                                 <div className="form-floating mb-4">
                                    <input 
                                        type="text" 
                                        value={values.name} 
                                        className="form-control" 
                                        onChange={handleChange} 
                                        id="name" 
                                        placeholder="Junior"
                                        autoComplete='off' 
                                    />
                                    <label htmlFor="name">Nome</label>
                                    {
                                        errors.name && <small className='text-danger'>{errors.name}</small>
                                    }
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating mb-4">
                                    <input 
                                        type="text" 
                                        value={values.lastname} 
                                        className="form-control" 
                                        onChange={handleChange} 
                                        id="lastname" 
                                        placeholder="Junior"
                                        autoComplete='off' 
                                    />
                                    <label htmlFor="lastname">Sobrenome</label>
                                    {
                                        errors.lastname && <small className='text-danger'>{errors.lastname}</small>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="form-floating mb-4">
                            <input 
                                type="text" 
                                value={values.email} 
                                className="form-control" 
                                onChange={handleChange} 
                                id="email" 
                                placeholder="name@example.com" 
                            />
                            <label htmlFor="email">Email</label>
                            {
                                errors.email && <small className='text-danger'>{errors.email}</small>
                            }
                        </div>

                        <div className="form-floating mb-4">
                            <input type="password" value={values.password} name="password" onChange={handleChange} className="form-control" id="password" placeholder="Senha" />
                            <label htmlFor="password">Senha</label>
                            {
                                errors.password && <small className='text-danger'>{errors.password}</small>
                            }
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary btn-lg">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

Signup.layout = (page: ReactNode) => <Layout>{page}</Layout>