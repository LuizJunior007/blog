import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
 
    return (
        <div className="main">
            <div>
                <Navbar />

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12">{children}</div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
