import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "/styles/ukraine.module.css";
import IconButton from "@material-ui/core/IconButton";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";


import SoundsPicker from "../../../components/artifacts/ukraine/SoundsPicker";
import ImagesPicker from "../../../components/artifacts/ukraine/ImagesPicker";

const UkraineArtifact = () => {
  const [currentStage, setCurrentStage] = React.useState(0);

  const initialArray = [];

  const [pickedSounds, setPickedSounds] = React.useState(initialArray);

  const [pickedImages, setPickedImages] = React.useState(initialArray);

  return (
    <>
      {currentStage == 0 ? (
        <Grid container className={styles.GridContainer} spacing={2}>
          <Grid item xs={12} md={12} className={styles.GridItem}>
            <div
              className={styles.buttonContainer}
              onClick={() => setCurrentStage(1)}
            >
              <p>
                This piece will use sound to communicate with you. Please click
                this box to proceed.
              </p>
            </div>
          </Grid>
        </Grid>
      ) : currentStage == 1 ? (
        <>
          <SoundsPicker
            pickedSounds={pickedSounds}
            setPickedSounds={setPickedSounds}
          />
          {pickedSounds.length == 6 ? (
            <>
              <IconButton className={styles.ProceedButton}>
                <ArrowRightIcon />
              </IconButton>
            </>
          ) : null}
        </>
      ) : currentStage == 2 ? (
        <>
          <ImagesPicker
            pickedImages={pickedImages}
            setPickedImages={setPickedImages}
          />
        </>
      ) : null}
    </>
  );
};

export default UkraineArtifact;
