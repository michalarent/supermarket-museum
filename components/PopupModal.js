import React from "react";
import { Modal, Fade, Grid, IconButton } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useContext } from "react";
import PopupContext from "./PopupContext";
import styles from "../styles/Home.module.css";
import { useLocalStorage, useSessionStorage } from "react-use-storage";

export default function PopupModal() {
  const [show, setShow] = React.useState(true);

  const handleClose = () => {
    setPopupModalOpen(false);
    setShow(false);
  };

  const body = (
    <>
      <div className={styles.chooseModal}>
        <div className={styles.chooseModalIcon}>
          <IconButton onClick={handleClose}>
            <HighlightOffIcon labelStyle={{ fontSize: "4rem" }} />
          </IconButton>
        </div>

        <Grid item xs={12} md={12}>
          <h1 className={styles.gardenTitle}>
            Welcome to the Supermarket Museum. You can scroll to navigate, zoom
            in and zoom out. If you hover on the coloured icons, you enter the
            speficic artefacts by clicking "BUY"
          </h1>
        </Grid>
      </div>
    </>
  );

  if (popupModalOpen == false) return null;

  return (
    <Modal
      disableEnforceFocus
      disableAutoFocus={true}
      open={show}
      hideBackdrop={true}
    >
      <Fade in={true} timeout={800}>
        <div>{body}</div>
      </Fade>
    </Modal>
  );
}
