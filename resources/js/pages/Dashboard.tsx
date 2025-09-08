import AdminLayout from "@/components/AdminLayout";
import { Head } from "@inertiajs/react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Dashboard(){


    return(
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Minha dashboard" />
            </Head>

            <div>
                Dashboard
            </div>
        </>
    );

}

Dashboard.layout = (page: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => <AdminLayout>{page}</AdminLayout>