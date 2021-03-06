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
import Loading from "../../components/Loading";

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
  const [backgroundColor, setBackgroundColor] = React.useState("#f4d688dd");

  const query = `{
    infoPages {
      slug
      title
      content {
        html
      }
    }
  }`;

  //'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'

  NProgress.configure({
    template: (
      <>
        <div className="bar" role="bar">
          <div className="peg"></div>
        </div>
        <div className="spinner" role="spinner">
          <div className="spinner-icon"></div>
        </div>
      </>
    ),
  });

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

  const [state, setState] = React.useState({
    isRouteChanging: false,
    loadingKey: 0,
  });

  React.useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router.events]);

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
      <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <IconButton
        className={styles.showButton}
        aria-label="open drawer"
        onClick={handleOpen}
      >
        <Menu fontSize="large" style={{ fill: "#f4d688" }} />
      </IconButton>
      <div className={classes} style={{ backgroundColor: backgroundColor }}>
        <div className={styles.closeIconContainer}>
          <IconButton onClick={handleHide}>
            <ChevronRight className={styles.closeIcon} />
          </IconButton>
        </div>
        <div className={styles.listItem} onClick={() => handleShow("about")}>
          <p className={styles.listItemText}>About</p>
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

        <div
          className={styles.listItem}
          onClick={() => handleShow("collaboration")}
        >
          <p className={styles.listItemText}>Collaboration</p>
        </div>

        <div className={styles.listItem} onClick={() => handleShow("contact")}>
          <p className={styles.listItemText}>Contact</p>
        </div>
        <div
          className={styles.listItem}
          onClick={() => handleShow("materials")}
        >
          <p className={styles.listItemText}>Materials</p>
        </div>
        <div className={styles.footer}>
          <div style={{ margin: "0.5vmin" }} />
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
          <Grid container>
            <Grid item md={4} xs={6}>
              <div className={styles.footerText2}>
                <h2
                  className={styles.link}
                  onClick={() => handleShow("action-kit")}
                >
                  Action Kit
                </h2>
              </div>
            </Grid>
            <Grid item md={4} xs={6}>
              <div className={styles.footerText2}>
                <h2
                  onClick={() => handleShow("press-kit")}
                  className={styles.link}
                >
                  Press Kit
                </h2>
              </div>
            </Grid>
            <Grid item md={4} xs={6}>
              <div className={styles.footerText2}>
                <h2
                  onClick={() => handleShow("support-us")}
                  className={styles.link}
                >
                  Support us
                </h2>
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
