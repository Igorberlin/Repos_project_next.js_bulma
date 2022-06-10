import "../styles/styles.scss";
import Head from "next/head";

import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Github Repos</title>
            </Head>
            <Navbar />
            <div className="page">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
