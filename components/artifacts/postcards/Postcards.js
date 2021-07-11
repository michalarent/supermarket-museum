import React from "react";
import ImageGallery from "react-image-gallery";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import FileSaver from "file-saver";
import dynamic from "next/dynamic";

const postcards = [
  {
    original:
      "/photo_gallery/postcards/Supermarket_Museum_Postcard_clear_1.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/Supermarket_Museum_Postcard_clear_2.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/Supermarket_Museum_Postcard_clear_3.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/Supermarket_Museum_Postcard_clear_4.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/Supermarket_Museum_Postcard_clear_5.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/Supermarket_Museum_Postcard_clear_6.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/Supermarket_Museum_Postcard_clear_7.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/Supermarket_Museum_Postcard_clear_8.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/Supermarket_Museum_Postcard_clear_9.jpg",
  },
];

const postcards_gallery = [
  {
    original:
      "/photo_gallery/postcards/gallery/Supermarket_Museum_Postcard_01.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/gallery/Supermarket_Museum_Postcard_02.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/gallery/Supermarket_Museum_Postcard_03.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/gallery/Supermarket_Museum_Postcard_04.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/gallery/Supermarket_Museum_Postcard_05.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/gallery/Supermarket_Museum_Postcard_06.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/gallery/Supermarket_Museum_Postcard_07.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/gallery/Supermarket_Museum_Postcard_08.jpg",
  },
  {
    original:
      "/photo_gallery/postcards/gallery/Supermarket_Museum_Postcard_09.jpg",
  },
];

export default function Postcards() {
  const ImageGallery = dynamic(
    () => import("react-image-gallery"),
    {
      ssr: false,
    }
  );
  const imgRef = React.useRef(null);

  function handleSaveFile(index) {
    FileSaver.saveAs(
      `/photo_gallery/postcards/Supermarket_Museum_Postcard_clear_${
        index + 1
      }.jpg`
    );
  }

  function _renderCustomControls() {
    return (
      <>
        <button
          type="button"
          className="image-gallery-icon image-gallery-download-button"
          aria-label="Download Image"
          style={{
            right: "68px",
            bottom: 0,
            padding: "20px",
          }}
          onClick={() => handleSaveFile(imgRef.current.getCurrentIndex())}
        >
          <CloudDownloadIcon />
        </button>
        <button
          type="button"
          className="image-gallery-icon image-gallery-download-button"
          aria-label="Download Image"
          style={{
            right: "136px",
            bottom: 0,
            padding: "20px",
          }}
          onClick={() => handleSaveFile(imgRef.current.getCurrentIndex())}
        >
          <FacebookIcon />
        </button>
        <button
          type="button"
          className="image-gallery-icon image-gallery-download-button"
          aria-label="Download Image"
          style={{
            right: "204px",
            bottom: 0,
            padding: "20px",
          }}
          onClick={() => handleSaveFile(imgRef.current.getCurrentIndex())}
        >
          <InstagramIcon />
        </button>
      </>
    );
  }

  return (
    <ImageGallery
      items={postcards}
      renderCustomControls={_renderCustomControls}
      ref={imgRef}
    />
  );
}
