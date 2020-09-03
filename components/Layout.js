import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  pageTitle,
  description,
  socialLinks,
  ...props
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lustria&family=Pacifico&family=Roboto+Slab&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800"
          rel="stylesheet"
        ></link>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&display=swap"
          rel="stylesheet"
        ></link>
        <link href="/styles/style.css" rel="stylesheet" type="text/css"></link>
      </Head>
      <Header />
      <section>
        <div className="layout">
          <div className="content">{children}</div>
        </div>
      </section>
      <Footer
        title={pageTitle}
        description={description}
        socialLinks={socialLinks}
      ></Footer>
    </>
  );
}
