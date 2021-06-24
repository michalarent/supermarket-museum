import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import SupermarketMap from "../components/maps/SupermarketMap";
import styles from "../styles/Home.module.css";
import map_style from "../styles/map.module.css";
import GardenMap from "../components/maps/GardenMap";

import { GraphQLClient } from "graphql-request";
import {
  getAllGardenArtifacts,
  getAllGardenLabels,
  getAllAgroPermaLabInfo,
} from "../api/graphcms";
import Router from "next/router";

export async function getStaticProps() {
  const { gardenArtifactModels } = await getAllGardenArtifacts();
  const { infoPages } = await getAllAgroPermaLabInfo();
  console.log(gardenArtifactModels);
  const { gardenLabels } = await getAllGardenLabels();
  console.log(gardenLabels);

  return {
    props: { gardenArtifactModels, gardenLabels, infoPages },
  };
}

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    width: "90vw",
    margin: "120px",
  },
}));

function Garden({
  gardenArtifactModels,
  openArtifact,
  gardenLabels,
  infoPages,
}) {
  async function handleTransitionChoose() {
    setShowTransition(true);
    await timeout(500);
    Router.push("/choose");
  }

  const [showTransition, setShowTransition] = React.useState(false);
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  return (
    <>
      <SideDrawer currentPage="garden" infoPages={infoPages} />
      <div className={styles.museumPage}>
        <img
          src="/next-icon.png"
          className={map_style.returnArrow}
          onMouseDown={() => handleTransitionChoose()}
          style={{ cursor: "pointer" }}
        />
        <GardenMap
          artifactModels={gardenArtifactModels}
          openArtifact={openArtifact}
          labels={gardenLabels}
        />
        <div className={showTransition ? styles.transitionOpening : ""}>
          <div className={styles.bgLayer}></div>
        </div>
      </div>
    </>
  );
}

export default Garden;
