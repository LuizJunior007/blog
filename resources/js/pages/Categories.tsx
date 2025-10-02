import AdminLayout from "@/components/AdminLayout";
import { Head } from "@inertiajs/react";
import { ReactNode } from "react";

export default function Categories(){

    return(
        <>
            <Head>
                <title>Categorias</title>
            </Head>

            <section>
                <h1>Categorias</h1>

                <div>
                    Content...
                </div>
            </section>

        </>
    );

}

Categories.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>