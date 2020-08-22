import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <section>
        <div className="layout">
          <div className="content">{children}</div>
        </div>
      </section>
      <footer>Built By Me</footer>
    </>
  );
}
