import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import SupermarketMap from "../components/maps/SupermarketMap";
import styles from "../styles/Home.module.css";
import map_style from "../styles/map.module.css";

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

function Museum({ artifactModels, openArtifact, labels }) {
  return (
    <>
      <SideDrawer />
      <div className={styles.museumPage}>
        <SupermarketMap
          artifactModels={artifactModels}
          openArtifact={openArtifact}
          labels={labels}
        />
      </div>
    </>
  );
}

export default Museum;
