import Layout from '@/components/Layout';
import { Head, usePage } from '@inertiajs/react';
import { ReactNode } from 'react';

export default function Home() {

    const { props } = usePage();

    return (
        <>
            <Head title="Home" />

            <h1>Home</h1>
            <div>
            
            </div>
        </>
    );
}

Home.layout = (page: ReactNode) => <Layout>{page}</Layout>