import React from "react";
import "../styles/globals.css";
import "../styles/maps.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/inksplash.css";
import Drawer from "../components/navigation/Drawer";

function MyApp({ Component, pageProps }) {
  const [show, setShow] = React.useState(false);

  function handleOpenMenu() {
    setShow(true);
  }

  function handleHideMenu() {
    setShow(false);
  }

  return (
    <>
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
