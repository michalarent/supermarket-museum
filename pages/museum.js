import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import SupermarketMap from "../components/maps/SupermarketMap";
import styles from "../styles/Home.module.css";
import map_style from "../styles/map.module.css";
import Router from "next/router";

import { GraphQLClient } from "graphql-request";
import {
  getAllArtifacts,
  getAllLabels,
  getAllAgroPermaLabInfo,
} from "../api/graphcms";

export async function getStaticProps() {
  const { artifactModels } = await getAllArtifacts();
  const { labels } = await getAllLabels();
  const { infoPages } = await getAllAgroPermaLabInfo();
  

  return {
    props: { artifactModels, labels, infoPages },
  };
}

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    width: "90vw",
    margin: "120px",
  },
}));

function Museum({ artifactModels, openArtifact, labels, infoPages }) {
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
      <SideDrawer currentPage="museum" infoPages={infoPages} />
      <div className={styles.museumPage}>
        <img
          src="/next-icon.png"
          className={map_style.returnArrow}
          onMouseDown={() => handleTransitionChoose()}
          style={{ cursor: "pointer" }}
        />
        <SupermarketMap
          artifactModels={artifactModels}
          openArtifact={openArtifact}
          labels={labels}
        />
        <div className={showTransition ? styles.transitionOpening : ""}>
          <div className={styles.bgLayer}></div>
        </div>
      </div>
    </>
  );
}

export default Museum;
