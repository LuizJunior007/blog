import { Link, usePage } from "@inertiajs/react";

export default function Sidebar(){

    const { component } = usePage();

    const toggleSideBar = () => {

        document.getElementById('sidebar')?.classList.toggle('show');

    }

    return(
        <>
            <header className="sticky-top">
                <nav className="navbar navbar-admin navbar-expand-md">
                    <div className="container-fluid">
                        <Link href="/dashboard" className="navbar-brand logo">
                            Blog
                        </Link>

                        <button className="btn btn-primary" id="btnToggleSideBar" onClick={toggleSideBar} type="button">
                            Button
                        </button>
                    </div>
                </nav>
            </header>

            <div className="sidebar" data-bs-scroll="true" id="sidebar">
                <div>
                    <nav>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/dashboard" className={`nav-link ${component === 'Dashboard' ? 'ativo' : ''}`}>
                                    <i className="bi bi-house"></i>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/posts" className={`nav-link ${component === 'Posts' ? 'ativo' : ''}`}>
                                    <i className="bi bi-file-post"></i>
                                    Posts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/categorias" className={`nav-link ${component === 'Categories' ? 'ativo' : ''}`}>
                                    <i className="bi bi-tags"></i>
                                    Categorias
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/usuarios" className={`nav-link ${component === 'Users' ? 'ativo' : ''}`}>
                                    <i className="bi bi-people"></i>
                                    Usuários
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/logout" className="nav-link">
                                    <i className="bi bi-box-arrow-left"></i>
                                    Sair
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );

}