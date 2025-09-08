import Layout from '@/components/Layout';
import { Head, usePage } from '@inertiajs/react';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export default function Home() {

    const { props } = usePage();

    console.log(props);

    return (
        <>
            <Head title="Home" />

            <h1>Home</h1>
            <div>
            
            </div>
        </>
    );
}

Home.layout = (page: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => <Layout>{page}</Layout>