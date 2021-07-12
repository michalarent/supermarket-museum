import styles from "./Drawer.module.css";
import { IconButton } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { useRouter } from "next/router";
import React from "react";

import { useContextualRouting } from "next-use-contextual-routing";
import Modal from "@material-ui/core/Modal";
import { getAllAgroPermaLabInfo } from "../../api/graphcms";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import NProgress from "nprogress";

export default function Drawer({
  handleOpen,
  handleHide,
  show,

  openInfoPage,
}) {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const { makeContextualHref, returnHref } = useContextualRouting();
  const [showManifesto, setShowManifesto] = React.useState(false);
  const [currentInfoPage, setCurrentInfoPage] = React.useState(null);
  const [infoPages, setInfoPages] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState("");
  const [backgroundColor, setBackgroundColor] = React.useState("#f4d688");

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

  const query = `{
    infoPages {
      slug
      title
      content {
        html
      }
    }
  }`;

  React.useEffect(() => {
    async function fetchMyAPI() {
      const res = await fetch(
        "https://api-eu-central-1.graphcms.com/v2/ckpfg6n0kk6w701z53y7h7d0n/master",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
          }),
        }
      );
      const json = await res.json();

      if (json.errors) {
        console.error(json.errors);
        throw new Error("Failed to fetch API");
      }
      console.log(json.data);
      setInfoPages(json.data.infoPages);
    }

    fetchMyAPI();
    console.log(infoPages);
  }, []);

  React.useEffect(() => {
    console.log(infoPages);
  }, [infoPages]);

  const handleShow = (slug) => {
    console.log(router.pathname);
    setCurrentPage(router.pathname);
    console.log(openInfoPage);
    if (openInfoPage != null) {
      setCurrentDisplayedInfoPage(openInfoPage);
    } else {
      setCurrentDisplayedInfoPage(slug);
      const url = "/" + slug;
      router.push(makeContextualHref(), url, {
        shallow: true,
      });
    }
    setOpen(true);
  };

  const setCurrentDisplayedInfoPage = (slug) => {
    let infoPageId = -1;

    for (var i = 0; i < infoPages.length; i++) {
      // look for the entry with a matching `code` value
      if (infoPages[i].slug === slug) {
        infoPageId = i;
      }
    }
    const infoPage = infoPages[infoPageId];
    setCurrentInfoPage(infoPage);
    console.log(infoPage);
  };

  React.useEffect(() => {
    setOpen(false);
    if (openInfoPage != null) {
      handleShow(openInfoPage);
    }
  }, []);

  const handleShowManifesto = () => {
    router.push(makeContextualHref(), "/manifesto", {
      shallow: "true",
    });
    setShowManifesto(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(currentPage);
    router.push(`${currentPage}`, undefined, {
      shallow: "true",
    });
  };

  //

  React.useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  //

  const body = (
    <>
      {currentInfoPage != null ? (
        <>
          <div className="modalCanvas">
            <div className="closeIcon">
              <IconButton onClick={handleClose}>
                <HighlightOffIcon labelStyle={{ fontSize: "4rem" }} />
              </IconButton>
            </div>
            <Box p={(2, 4)} className="modalBoxContainer">
              <Grid item xs={12} md={12}>
                <div className="modalContentAdjusted">
                  <h1 className="heading">{currentInfoPage.title}</h1>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={12} lg={12}>
                      <div
                        className={"artifactDescription"}
                        dangerouslySetInnerHTML={{
                          __html: currentInfoPage.content.html,
                        }}
                      ></div>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={5}
                    className={"technicalInformationContainer"}
                  >
                    <Grid item xs={12} md={12} lg={6}>
                      <div className={"technicalInformation"} />
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                      <div className={"technicalInformation"} />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Box>
          </div>
        </>
      ) : null}
    </>
  );

  let classes = styles.sideDrawer;
  if (show) {
    classes = `${styles.sideDrawer} ${styles["open"]}`;
  }
  return (
    <>
      <IconButton
        className={styles.showButton}
        aria-label="open drawer"
        onClick={handleOpen}
      >
        <Menu fontSize="large" style={{ fill: "#fcf7ed" }} />
      </IconButton>
      <div className={classes} style={{ backgroundColor: backgroundColor }}>
        <div className={styles.closeIconContainer}>
          <IconButton onClick={handleHide}>
            <ChevronRight className={styles.closeIcon} />
          </IconButton>
        </div>
        <div className={styles.listItem} onClick={() => router.push("/")}>
          <p className={styles.listItemText}>Home</p>
        </div>
        <div className={styles.listItem} onClick={() => router.push("/museum")}>
          <p className={styles.listItemText}>Supermarket</p>
        </div>
        <div className={styles.listItem} onClick={() => router.push("/garden")}>
          <p className={styles.listItemText}>Garden</p>
        </div>
        <div
          className={styles.listItem}
          onClick={() => handleShow("manifesto")}
        >
          <p className={styles.listItemText}>Manifesto</p>
        </div>
        <div className={styles.listItem} onClick={() => handleShow("about")}>
          <p className={styles.listItemText}>About</p>
        </div>
        <div className={styles.listItem} onClick={() => handleShow("contact")}>
          <p className={styles.listItemText}>Contact</p>
        </div>
        <div className={styles.listItem} onClick={() => handleShow("contact")}>
          <p className={styles.listItemText}>Materials</p>
        </div>
        <div className={styles.footer}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img className={styles.logo} src="/agropermalab-logo.png"></img>
            </Grid>
            <Grid item xs={6}>
              <div className={styles.footerText}>
                <h2>AgroPermaLab</h2>
                <h3>
                  contact [at] agropermalab.org
                  <br />
                  <a href="https://www.agropermalab.org">agropermalab.org</a>
                </h3>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <Modal open={open}>
        <>{body}</>
      </Modal>
    </>
  );
}
