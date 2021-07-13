import React from "react";
import SideDrawer from "../components/navigation/SideDrawer";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import SusanneMap from "../components/maps/SusanneMap";
import styles from "../styles/Home.module.css";
import map_style from "../styles/map.module.css";
import Router from "next/router";
import PopupModal from "../components/PopupModal";
import {
  getAllGardenArtifacts,
  getAllGardenLabels,
  getAllAgroPermaLabInfo,
} from "../api/graphcms";

export async function getStaticProps() {
  const { gardenArtifactModels } = await getAllGardenArtifacts();

  const { gardenLabels } = await getAllGardenLabels();

  return {
    props: { gardenArtifactModels, gardenLabels },
  };
}
function Museum({ gardenArtifactModels, openArtifact, gardenLabels }) {
  return (
    <>
      <div>
        <img
          onClick={() => Router.push("/garden")}
          src="/next-icon.png"
          className={map_style.returnArrow}
          style={{ cursor: "pointer" }}
        />
        <SusanneMap
          artifactModels={gardenArtifactModels}
          openArtifact={openArtifact}
          labels={gardenLabels}
        />
      </div>
    </>
  );
}

export default Museum;
