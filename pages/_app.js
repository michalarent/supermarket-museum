import React from "react";
import "../styles/globals.css";
import "../styles/maps.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/inksplash.css";
import Drawer from "../components/navigation/Drawer";
import { useSessionStorage } from "react-use-storage";
import PopupContext from "../components/PopupContext";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [show, setShow] = React.useState(false);

  const router = useRouter();

  function handleOpenMenu() {
    setShow(true);
  }

  function handleHideMenu() {
    setShow(false);
  }

  const getUrl = router.pathname;

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Drawer
        handleOpen={handleOpenMenu}
        handleHide={handleHideMenu}
        show={show}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
