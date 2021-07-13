import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";

import { makeStyles } from "@material-ui/core/styles";
import SupermarketMap from "../components/maps/SupermarketMap";
import styles from "../styles/Home.module.css";
import styles_map from "../styles/map.module.css";
import { useRouter } from "next/router";
import Fade from "@material-ui/core/Fade";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import Backrop from "@material-ui/core/Backdrop";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { NoSsr } from "@material-ui/core";
import {
  getAllArtifacts,
  getAllLabels,
  getAllAgroPermaLabInfo,
} from "../api/graphcms";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    width: "90vw",
    margin: "120px",
  },
}));

export default function Choose() {
  const router = useRouter();

  React.useEffect(() => {
    router.prefetch("/garden");
    router.prefetch("/museum");
  }, []);

  async function handleTransitionMuseum() {
    setShowTransition(true);
    await timeout(500);
    router.push("/museum");
  }

  const [show, setShow] = React.useState(true);

  async function handleTransitionGarden() {
    setShowTransition(true);
    await timeout(500);
    router.push("/garden");
  }

  const [showTransition, setShowTransition] = React.useState(false);
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const handleClose = () => {
    setShow(false);
  };

  const body = (
    <>
      <>
        <div className={styles.chooseModal}>
          <div className={styles.chooseModalIcon}>
            <IconButton onClick={handleClose}>
              <HighlightOffIcon labelStyle={{ fontSize: "4rem" }} />
            </IconButton>
          </div>

          <Grid item xs={12} md={12}>
            <h1 className={styles.gardenTitle}>
              You can choose the path you visit by clicking either at the
              supermarket’s map or garden’s map.
            </h1>
          </Grid>
        </div>
      </>
    </>
  );

  return (
    <>
      <div className="frontPageBackground">
        <Fade in={true} timeout={500}>
          <Grid container className={styles.landingPage}>
            <Grid item xs={12} md={6} lg={6}>
              <div
                className={styles.supermarketMiniContainer}
                onClick={handleTransitionMuseum}
              >
                <img
                  className={styles.supermarketMini}
                  src="/supermarket/supermarketGrubszy.png"
                ></img>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div
                className={styles.gardenMiniContainer}
                onClick={handleTransitionGarden}
              >
                <img
                  className={styles.gardenMini}
                  src="/supermarket/gardenGrubszy.png"
                ></img>
              </div>
            </Grid>
          </Grid>
        </Fade>

        <Fade in={show} timeout={800}>
          <div>{body}</div>
        </Fade>

        <div className={showTransition ? styles.transitionOpening : ""}>
          <div className={styles.bgLayer}></div>
        </div>
      </div>
    </>
  );
}
