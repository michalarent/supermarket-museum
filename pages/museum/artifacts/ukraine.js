import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "/styles/ukraine.module.css";
import IconButton from "@material-ui/core/IconButton";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import SoundsPicker from "../../../components/artifacts/ukraine/SoundsPicker";
import ImagesPicker from "../../../components/artifacts/ukraine/ImagesPicker";
import FinalSelection from "../../../components/artifacts/ukraine/FinalSelection";
import styles_Ukraine from "../../../styles/ukraine.module.css";

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
              <p className={styles_Ukraine.text}>
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
            setCurrentStage={setCurrentStage}
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
            setCurrentStage={setCurrentStage}
          />
        </>
      ) : currentStage == 3 ? (
        <>
          <FinalSelection
            pickedImages={pickedImages}
            pickedSounds={pickedSounds}
            setCurrentStage={setCurrentStage}
          />
        </>
      ) : null}
    </>
  );
};

export default UkraineArtifact;
