import { LayoutProps } from "./Layout";
import Sidebar from "./Sidebar";

export default function AdminLayout({children}: LayoutProps){

    return(
        <>
            <Sidebar />

            <div className="main-admin p-4">
                {children}
            </div>
        </>
    );

}