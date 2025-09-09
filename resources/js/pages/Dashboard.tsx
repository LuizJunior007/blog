import AdminLayout from "@/components/AdminLayout";
import { Head } from "@inertiajs/react";
import { ReactNode } from "react";

export default function Dashboard(){


    return(
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Minha dashboard" />
            </Head>

            <section>
                <h1>Dashboard</h1>

                <div>
                    Content...
                </div>
            </section>
        </>
    );

}

Dashboard.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>