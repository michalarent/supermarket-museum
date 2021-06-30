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

  const { gardenLabels } = await getAllGardenLabels();

  return {
    props: { gardenArtifactModels, gardenLabels, infoPages },
  };
}

export default function Garden({
  gardenArtifactModels,
  openArtifact,
  gardenLabels,
  infoPages,
}) {
  return (
    <>
      <div>
        <img
          src="/next-icon.png"
          className={map_style.returnArrow}
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
