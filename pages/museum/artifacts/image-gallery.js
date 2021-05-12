import ImageGallery from "../../../components/ImageGallery";
import React from "react";
import Modal from "@material-ui/core/Modal";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Backdrop from "@material-ui/core/Backdrop";
import IconButton from "@material-ui/core/IconButton";
import ExampleSvg from "../../../components/maps/ExampleSvg";
import SideDrawer from "../../../components/navigation/SideDrawer";

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

          <ImageGallery className="imageGalleryBootstrap" />
        </div>
      </Modal>
    </>
  );
}
