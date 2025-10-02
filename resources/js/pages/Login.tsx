import Layout from '@/components/Layout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { ReactNode, useState } from 'react';

export default function Login() {

    const { errors } = usePage().props;

    const [ values, setValues ] = useState({
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

        router.post('/authLogin', values);
    }

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Faça login para ter acesso a todo o conteúdo do blog" />
            </Head>

            <section className="d-flex flex-column align-items-center justify-content-center">
                <div className="login-form">
                    <div className="mb-4 text-center">
                        <h1>Login</h1>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-4">
                            <input type="text" value={values.email} className="form-control" onChange={handleChange} id="email" placeholder="name@example.com" />
                            <label htmlFor="email">Email</label>
                            {
                                errors.email && <small className='text-danger'>{errors.email}</small>
                            }
                        </div>

                        <div className="form-floating mb-4">
                            <input type="password" value={values.password} autoComplete='off' name="password" onChange={handleChange} className="form-control" id="password" placeholder="Senha" />
                            <label htmlFor="password">Senha</label>
                            {
                                errors.password && <small className='text-danger'>{errors.password}</small>
                            }
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary btn-lg">
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>

                <div className='mt-4 fw-medium'>
                    Ainda não tem uma conta? <Link href="/signup">Cadastre-se</Link>
                </div>
            </section>
        </>
    );
}

Login.layout = (page: ReactNode) => <Layout>{page}</Layout>