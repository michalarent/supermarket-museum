import React from "react";
import "../styles/globals.css";
import "../styles/maps.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/inksplash.css";
import Drawer from "../components/navigation/Drawer";
import { useSessionStorage } from "react-use-storage";
import PopupContext from "../components/PopupContext";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [show, setShow] = React.useState(false);
  const [backgroundColor, setBackgroundColor] = React.useState("#f4d688");

  function handleOpenMenu() {
    setShow(true);
  }

  function handleHideMenu() {
    setShow(false);
  }

  const router = useRouter();
  const getUrl = router.pathname;

  React.useEffect(() => {
    if (router.pathname.includes("garden")) {
      setBackgroundColor("#e3f393dd");
      console.log(backgroundColor);
    }
    if (router.pathname.includes("museum")) {
      setBackgroundColor("#f4d688dd");
      console.log(backgroundColor);
    }
  }, [router.events]);

  return (
    <>
      <Drawer
        handleOpen={handleOpenMenu}
        handleHide={handleHideMenu}
        show={show}
        backgroundColor={backgroundColor}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
