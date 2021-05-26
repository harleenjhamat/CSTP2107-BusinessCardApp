import { Provider } from "next-auth/client";
import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.scss";
import Footer from "../components/Footer";
import Navbar from "./../components/Navbar";


import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <Head>
          <title>CyberCard</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <script type="text/javascript" src="/js/bootstrap.bundle.js"></script>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
