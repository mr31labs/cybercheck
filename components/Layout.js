import Head from 'next/head';

export default function Layout({ children, title = "Cybersecurity Assessment" }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Cybersecurity assessment tool for companies and employees." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="fade-in">
                <div className="container">
                    {children}
                </div>
            </main>
        </>
    );
}
