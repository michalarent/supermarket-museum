import React from "react";
import Fade from "@material-ui/core/Fade";
import SupermarketMap from "../../../components/maps/SupermarketMap";
import SideDrawer from "../../../components/navigation/SideDrawer";
import styles from "../../../styles/Home.module.css";

import { useRouter } from "next/router";

import Modal from "@material-ui/core/Modal";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import Grid from "@material-ui/core/Grid";
import Backdrop from "@material-ui/core/Backdrop";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import router from "next/router";
import Synthesizer from "./synthesizer";
import { getAllArtifacts } from "../../../api/graphcms";

export async function getStaticProps() {
  const { artifactModels } = await getAllArtifacts();
  console.log(artifactModels);

  return {
    props: { artifactModels },
  };
}

export default function SupermarketSynthesizer({ artifactModels }) {
  const handleClose = () => {
    router.push("/museum");
  };

  const body = (
    <div className="modalCanvas">
      <div className="closeIcon">
        <IconButton onClick={handleClose}>
          <HighlightOffIcon labelStyle={{ fontSize: "4rem" }} />
        </IconButton>
      </div>
      <Box p={(2, 4)} className="boxContainer">
        <Grid item xs={12} md={12}>
          <>
            <Synthesizer />
          </>
        </Grid>
      </Box>
    </div>
  );
  return (
    <>
      <SideDrawer />
      <div className={styles.museumPage}>
        <SupermarketMap
          artifactModels={artifactModels}
          openArtifact={"supermarket-synthesizer"}
        />
      </div>
    </>
  );
  body;
}
