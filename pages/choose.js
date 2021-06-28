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

  const [smHovered, setSMHovered] = React.useState(false);
  const [gHovered, setGHovered] = React.useState(false);

  return (
    <>
      <SideDrawer currentPage={"choose"} infoPages={infoPages} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={6}>
          <div>
            <img
              className={styles.SupermarketMap}
              src="/supermarket/supermarket_1-grubszy.png"
            />
            <h1 className={styles.supermarketTitle}>
              Enter the supermarket museum
            </h1>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div className={styles.hoverDiv}>
            <h1 className={styles.gardenTitle}>Enter the garden museum</h1>
            <img
              className={styles.GardenMap}
              src="/supermarket/garden_2.png"
            ></img>
          </div>
        </Grid>
      </Grid>

      <div className={showTransition ? styles.transitionOpening : ""}>
        <div className={styles.bgLayer}></div>
      </div>
    </>
  );
}
