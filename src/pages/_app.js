import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>CyberCard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="text/javascript" src="/static/bootstrap.bundle.js"></script>
        <link rel="icon" href="/logo1.ico" />
      </Head>
    </>
  );
}

export default MyApp;
