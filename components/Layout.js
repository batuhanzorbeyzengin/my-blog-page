import Head from "next/head";

export default function Layout({children, title, description, keywords, canonical}) {
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta http-equiv="content-language" content="tr" />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href={canonical} />
            </Head>
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
        </>
    )
}