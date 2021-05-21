import React from "react";
import Modal from "@material-ui/core/Modal";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Backdrop from "@material-ui/core/Backdrop";
import IconButton from "@material-ui/core/IconButton";
import ExampleSvg from "../../../components/maps/ExampleSvg";
import SideDrawer from "../../../components/navigation/SideDrawer";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { useRouter } from "next/router";

export default function ImgGallery(props) {
  const router = useRouter();

  const handleClose = () => {
    router.push("/museum");
  };

  const [isOpen, setIsOpen] = React.useState(false);

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
          <Carousel>
            <Carousel.Item>
              <Image
                className="imgGalleryPhoto"
                src="/photo_gallery/1.jpg"
                alt="Third slide"
                layout="fill"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="imgGalleryPhoto"
                src="/photo_gallery/2.jpg"
                alt="Third slide"
                layout="fill"
              />
            </Carousel.Item>
          </Carousel>
          <div className="closeIcon">
            <IconButton onClick={handleClose} className="iconButton">
              <HighlightOffIcon labelStyle={{ fontSize: "4rem" }} />
            </IconButton>
          </div>
        </div>
      </Modal>
    </>
  );
}
