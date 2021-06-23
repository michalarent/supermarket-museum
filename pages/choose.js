import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";

import { makeStyles } from "@material-ui/core/styles";
import SupermarketMap from "../components/maps/SupermarketMap";
import styles from "../styles/Home.module.css";
import map_style from "../styles/map.module.css";
import Router from "next/router";
import Fade from "@material-ui/core/Fade";

import { GraphQLClient } from "graphql-request";
import { getAllArtifacts, getAllLabels } from "../api/graphcms";

export async function getStaticProps() {
  const { artifactModels } = await getAllArtifacts();
  const { labels } = await getAllLabels();
  console.log(artifactModels);

  return {
    props: { artifactModels, labels },
  };
}

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    width: "90vw",
    margin: "120px",
  },
}));

export default function Museum({ artifactModels, openArtifact, labels }) {
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
      <SideDrawer />
      <Fade in={true} timeout={800}>
        <div className={styles.landingImageContainer}>
          <div
            className={styles.enterSupermarket}
            onMouseDown={() => handleTransitionMuseum()}
            style={{ cursor: "pointer" }}
          >
            Enter supermarket
          </div>
          <div
            className={styles.enterGarden}
            onMouseDown={() => handleTransitionGarden()}
            style={{ cursor: "pointer" }}
          >
            Enter garden
          </div>
          <img className={styles.landingImage} src="/supermarket/landing.png" />
          <div className={showTransition ? styles.transitionOpening : ""}>
            <div className={styles.bgLayer}></div>
          </div>
        </div>
      </Fade>
    </>
  );
}
