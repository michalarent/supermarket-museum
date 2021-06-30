import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";

import { makeStyles } from "@material-ui/core/styles";
import SupermarketMap from "../components/maps/SupermarketMap";
import styles from "../styles/Home.module.css";
import styles_map from "../styles/map.module.css";
import Router from "next/router";
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

export async function getStaticProps() {
  const { infoPages } = await getAllAgroPermaLabInfo();

  return {
    props: { infoPages },
  };
}

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    width: "90vw",
    margin: "120px",
  },
}));

export default function Choose({ infoPages }) {
  async function handleTransitionMuseum() {
    setShowTransition(true);
    await timeout(500);
    Router.push("/museum");
  }

  const [show, setShow] = React.useState(true);
  async function handleTransitionGarden() {
    setShowTransition(true);
    await timeout(500);
    Router.push("/garden");
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
    <NoSsr>
      <SideDrawer
        currentPage={"choose"}
        infoPages={infoPages}
        iconColor={"black"}
      />
      <Grid container className={styles.landingPage}>
        <Grid item xs={12} md={6} lg={6}>
          <img
            className={styles.supermarketMini}
            onClick={handleTransitionMuseum}
            src="/supermarket/supermarketGrubszy.png"
          ></img>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div className={styles.hoverDiv}>
            <img
              className={styles.gardenMini}
              onClick={handleTransitionGarden}
              src="/supermarket/gardenGrubszy.png"
            ></img>
          </div>
        </Grid>
      </Grid>
      <Modal
        open={show}
        disableAutoFocus={true}
        hideBackdrop={true}
        BackdropProps={{ open: false, invisible: true }}
      >
        {body}
      </Modal>
      <div className={showTransition ? styles.transitionOpening : ""}>
        <div className={styles.bgLayer}></div>
      </div>
    </NoSsr>
  );
}
