import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import SupermarketMap from "../components/maps/SupermarketMap";
import styles from "../styles/Home.module.css";
import map_style from "../styles/map.module.css";
import Router from "next/router";
import PopupModal from "../components/PopupModal";

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

function Museum({ artifactModels, openArtifact, labels, infoPages }) {
  return (
    <>
      <div>
        <PopupModal />

        <img
          src="/next-icon.png"
          className={map_style.returnArrow}
          style={{ cursor: "pointer" }}
        />
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
