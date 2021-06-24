import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";

import { makeStyles } from "@material-ui/core/styles";
import SupermarketMap from "../components/maps/SupermarketMap";
import styles from "../styles/Home.module.css";
import styles_map from "../styles/map.module.css";
import Router from "next/router";
import Fade from "@material-ui/core/Fade";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { GraphQLClient } from "graphql-request";
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

export default function Museum({ infoPages }) {
  async function handleTransitionMuseum() {
    setShowTransition(true);
    await timeout(500);
    Router.push("/museum");
  }

  async function handleTransitionGarden() {
    setShowTransition(true);
    await timeout(500);
    Router.push("/garden");
  }

  const [showTransition, setShowTransition] = React.useState(false);
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  return (
    <>
      <SideDrawer currentPage={"choose"} infoPages={infoPages} />
      <TransformWrapper
        wheel={{ step: 100 }}
        options={{
          limitToBounds: false,
          minScale: 0.5,
          maxScale: 2,
          initialScale: 0.5,
        }}
      >
        <div className={styles.allArrows}>
          {/* <IconButton> */}
          <img
            className={styles.supermarketArrow}
            src="/next-icon.png"
            onMouseDown={() => handleTransitionMuseum()}
            style={{ cursor: "pointer" }}
          />
          {/* </IconButton> */}
          <img
            src="/next-icon.png"
            className={styles.gardenArrow}
            onMouseDown={() => handleTransitionGarden()}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Fade in={true} timeout={800}>
          <TransformComponent className={styles_map.TransformComponent}>
            <img
              className={styles.landingImage}
              src="/supermarket/landing.png"
            />
          </TransformComponent>
        </Fade>
      </TransformWrapper>
      <div className={showTransition ? styles.transitionOpening : ""}>
        <div className={styles.bgLayer}></div>
      </div>
    </>
  );
}
