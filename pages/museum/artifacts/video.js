import React from "react";
import Modal from "@material-ui/core/Modal";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Backdrop from "@material-ui/core/Backdrop";
import IconButton from "@material-ui/core/IconButton";
import Fade from "@material-ui/core/Fade";
import ExampleSvg from "../../../components/maps/ExampleSvg";
import SideDrawer from "../../../components/navigation/SideDrawer";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ImgGallery(props) {
  const router = useRouter();

  const handleClose = () => {
    router.push("/museum");
  };

  return (
    <>
      {/* <Fade in={true} timeout={500}> */}
      <div>
        <SideDrawer />
        <div className="museum-page">
          <ExampleSvg />
        </div>
      </div>
      {/* </Fade> */}
      <Modal
        open={true}
        BackdropComponent={Backdrop}
        disableAutoFocus={true}
        BackdropProps={{
          style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          timeout: 200,
        }}
      >
        <div className="modalCanvasGallery">
          <div className="closeIcon">
            <IconButton onClick={handleClose} className="iconButton">
              <HighlightOffIcon labelStyle={{ fontSize: "4rem" }} />
            </IconButton>
          </div>

          <iframe
            width="100%"
            height="100%"
            sandbox="allow-same-origin allow-scripts allow-popups"
            src="https://framatube.org/videos/embed/4a9b3ab9-67f1-406f-8b28-45c4e0ac16ba?title=0&warningTitle=0&peertubeLink=0"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
}
