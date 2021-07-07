import { Provider } from "next-auth/client";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "semantic-ui-css/semantic.min.css";
import "../styles/globals.scss";

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
          
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          
          <link
            rel="stylesheet"
            href="https://www.w3schools.com/w3css/4/w3.css"
          ></link>

          {/* Google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700"
            rel="stylesheet"
            type="text/css"
          />

          <link rel="icon" href="/favicon.ico" />

          <script type="text/javascript" src="/js/bootstrap.bundle.js"></script>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
