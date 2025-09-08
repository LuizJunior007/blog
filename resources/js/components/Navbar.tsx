import { Link, usePage } from '@inertiajs/react';

export default function Navbar() {

    const { props } = usePage<{ auth: { user: any } }>();

    const user = props.auth.user;

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <Link href="/" className="navbar-brand logo">
                        <div>
                            Blog
                        </div>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navBarLinks"
                        aria-controls="navBarLinks"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navBarLinks">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                {
                                    !user
                                        ?
                                    <Link href="/login" className='nav-link'>
                                        Login
                                    </Link>
                                        :
                                    <Link href="/logout" className='nav-link'>
                                        Sair
                                    </Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
