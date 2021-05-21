import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "/styles/ukraine.module.css";
import Image from "next/image";

const ImagesPicker = ({ pickedImages, setPickedImages }) => {
  const images = [
    { id: "1", image: "https://picsum.photos/600/800" },
    { id: "3", image: "https://picsum.photos/600/800" },
    { id: "4", image: "https://picsum.photos/600/800" },
    { id: "5", image: "https://picsum.photos/600/800" },
    { id: "6", image: "https://picsum.photos/600/800" },
    { id: "7", image: "https://picsum.photos/600/800" },
    { id: "8", image: "https://picsum.photos/600/800" },
    { id: "9", image: "https://picsum.photos/600/800" },
    { id: "10", image: "https://picsum.photos/600/800" },
    { id: "11", image: "https://picsum.photos/600/800" },
    { id: "12", image: "https://picsum.photos/600/800" },
    { id: "13", image: "https://picsum.photos/600/800" },
    { id: "14", image: "https://picsum.photos/600/800" },
    { id: "15", image: "https://picsum.photos/600/800" },
  ];
  const handleEntry = (entry) => {
    var array = [...pickedImages];
    var index = array.indexOf(entry);

    if (index !== -1) {
      array.splice(index, 1);
      setPickedImages(array);
    } else {
      if (pickedImages.length == 6) {
        pickedImages.shift();
      }
      setPickedImages([...pickedImages, entry]);
    }
  };

  const [hover, setHover] = React.useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const handleClick = (event) => {
    var id = event.target.dataset.info;
    console.log(id);
    handleEntry(id);
  };

  const displayImage = (event) => {
    var id = event.target.dataset.info;
    if (id != null) {
      console.log(id);
      console.log(images[id].image);
    }
    return (
      <Image
        // className={styles.ImageHover}
        src="/photo_gallery/1.jpg"
        // width="500"
        //   height="500"
      />
    );
  };

  return (
    <>
      <Grid container className={styles.GridContainer} spacing={2}>
        <Grid item xs={12} md={12} className={styles.GridItemHeader}>
          <p>Select images.</p>
        </Grid>
        <>
          {images.map((image) => (
            <Grid item className={styles.GridItem} key={image.id}>
              {pickedImages.includes(image.id) ? (
                <>
                  <div
                    className={styles.buttonContainerSelected}
                    onClick={handleClick}
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                    data-info={image.id}
                  >
                    <p>{image.id}</p>
                  </div>
                </>
              ) : (
                <div
                  className={styles.buttonContainer}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  data-info={image.id}
                >
                  <p>{image.id}</p>
                </div>
              )}
            </Grid>
          ))}
        </>
      </Grid>
      <Grid container className={styles.GridContainer2}>
        <Grid item xs={12} md={12} className={styles.GridItem}>
          <p>
            You picked:
            {pickedImages.map((item) => {
              return item + " ";
            })}
          </p>
        </Grid>
        {pickedImages.length == 6 ? (
          <Grid item xs={12} md={12} className={styles.GridItem}>
            <button onClick={() => setCurrentStage(2)}>Proceed</button>
          </Grid>
        ) : null}
      </Grid>
      {hover ? (
        <>
          {console.log("Hovered")}
          <Image
            className={styles.ImageHover}
            src="/photo_gallery/1.jpg"
            layout="fill"
          />
        </>
      ) : null}
    </>
  );
};

export default ImagesPicker;
