import '../styles/globals.css';
import Head from 'next/head';

function galaxySetup({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <meta name="author" content="Galaxy Setup" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="description" content="Galaxy Setup" />
                <link rel="shortcut icon" href="/images/icon.png" />
                <title>Galaxy Setup</title>
            </Head>
            <Component {...pageProps} />
        </div>
    );
}

export default galaxySetup;
