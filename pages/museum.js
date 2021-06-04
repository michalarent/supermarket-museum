import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import SupermarketMap from "../components/maps/SupermarketMap";
import styles from "../styles/Home.module.css";
import map_style from "../styles/map.module.css";

import { GraphQLClient } from "graphql-request";
import { getAllArtifacts } from "../api/graphcms";

export async function getStaticProps() {
  const { artifactModels } = await getAllArtifacts();
  console.log(artifactModels);

  return {
    props: { artifactModels },
  };
}

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    width: "90vw",
    margin: "120px",
  },
}));

function Museum({ artifactModels, openArtifact }) {
  return (
    <>
      <SideDrawer />
      <div className={styles.museumPage}>
        <SupermarketMap
          artifactModels={artifactModels}
          openArtifact={openArtifact}
        />
      </div>
    </>
  );
}

export default Museum;
