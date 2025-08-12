import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = {
            email: email,
            password: password,
        };

        const res = await fetch('http://localhost:8000/api/authLogin', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
        });

        const data = await res.json();
        console.log(data);
    };

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Faça login para ter acesso a todo o conteúdo do blog" />
            </Head>

            <section className="d-flex justify-content-center">
                <div className="login-form">
                    <div className="mb-3">
                        <h1>Login</h1>
                    </div>

                    <form>
                        <div className="form-floating mb-3">
                            <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="password" name="password" className="form-control" id="password" placeholder="Senha" />
                            <label htmlFor="password">Senha</label>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary btn-lg">
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
