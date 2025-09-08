import { Head, Link } from "@inertiajs/react";

export default function Contato(){

    return(

        <>
            <Head>
                <title>Contato</title>
                <meta name="description" content="Olá mundo" />
            </Head>

            <nav>
                <Link href="/">Home</Link>
            </nav>

            <div>
                Contato
            </div>
        </>
    );

}