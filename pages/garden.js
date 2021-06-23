import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import SupermarketMap from "../components/maps/SupermarketMap";
import styles from "../styles/Home.module.css";
import map_style from "../styles/map.module.css";
import GardenMap from "../components/maps/GardenMap";

import { GraphQLClient } from "graphql-request";
import { getAllGardenArtifacts, getAllGardenLabels } from "../api/graphcms";
import router from "next/router";

export async function getStaticProps() {
  const { gardenArtifactModels } = await getAllGardenArtifacts();
  console.log(gardenArtifactModels);
  const { gardenLabels } = await getAllGardenLabels();
  console.log(gardenLabels);

  return {
    props: { gardenArtifactModels, gardenLabels },
  };
}

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    width: "90vw",
    margin: "120px",
  },
}));

export default function Garden({
  gardenArtifactModels,
  openArtifact,
  gardenLabels,
}) {
  return (
    <>
      <SideDrawer />
      <div className={styles.museumPage}>
        <img
          src="/next-icon.png"
          className={map_style.returnArrow}
          onMouseDown={() => router.push("/choose")}
          style={{ cursor: "pointer" }}
        />
        <GardenMap
          artifactModels={gardenArtifactModels}
          openArtifact={openArtifact}
          labels={gardenLabels}
        />
      </div>
    </>
  );
}
