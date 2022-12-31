import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children, title, description, keywords, canonical}) {
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta httpEquiv="content-language" content="tr" />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href={canonical} />
            </Head>
            <div className="container">
                <div className="row">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    )
}