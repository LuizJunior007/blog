import { Link } from "@inertiajs/react";

export default function Sidebar(){

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
                                <Link href="/logout" className="nav-link">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/logout" className="nav-link">
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