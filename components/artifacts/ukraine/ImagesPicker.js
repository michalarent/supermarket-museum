import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "/styles/ukraine.module.css";
import Image from "next/image";

const ImagesPicker = ({
  pickedImages,
  setPickedImages,
  currentStage,
  setCurrentStage,
}) => {
  const images = [
    { id: "1", image: "/ukraine/1_Morning.jpg" },
    { id: "2", image: "/ukraine/2_GoingWork.jpg" },
    { id: "3", image: "/ukraine/3_Library.jpg" },
    { id: "4", image: "/ukraine/4_Work.jpg" },
    { id: "5", image: "/ukraine/5_Market.jpg" },
    { id: "6", image: "/ukraine/6_Street_2.jpg" },
    { id: "7", image: "/ukraine/7_Street_trafic.jpg" },
    { id: "8", image: "/ukraine/8_Park.jpg" },
    { id: "9", image: "/ukraine/9_transport.png" },
    { id: "10", image: "/ukraine/10_Supermarket_Trolley.jpg" },
    { id: "11", image: "/ukraine/11_Supermarket_Checkout.jpg" },
    { id: "12", image: "/ukraine/12_Working_Garden.jpg" },
    { id: "13", image: "/ukraine/13_Cafe_2.jpg" },
    { id: "14", image: "/ukraine/14_Kitchen_2.jpg" },
    { id: "15", image: "/ukraine/15_Friend.jpg" },
    { id: "16", image: "/ukraine/16_Bees_1.jpg" },
    { id: "17", image: "/ukraine/17_Stream.jpg" },
    { id: "18", image: "/ukraine/18_Crowns.png" },
    { id: "19", image: "/ukraine/19_Nightingales.png" },
    { id: "20", image: "/ukraine/20_Ice.png" },
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

  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={styles.GridContainer}
        spacing={2}
      >
        <Grid item xs={6} md={12} className={styles.GridItemHeader}>
          <p>
            What kind of pictures and sceneries do you actually have around you
            on a daily basis? Choose six and click next.
          </p>
        </Grid>
        <>
          {images.map((image) => (
            <Grid item className={styles.GridItem} key={image.id}>
              {pickedImages.includes(image.id) ? (
                <>
                  <div
                    className={styles.Image_buttonContainerSelected}
                    onClick={handleClick}
                    onMouseLeave={onLeave}
                    data-info={image.id}
                    style={{
                      backgroundImage: "url(" + image.image + ")",
                      backgroundBlendMode: "overlay",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        src={image.image}
                        className={styles.image}
                        layout="responsive"
                        height={500}
                        width={500}
                      ></Image>
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className={styles.Image_buttonContainer}
                  onClick={handleClick}
                  onMouseLeave={onLeave}
                  data-info={image.id}
                  style={{
                    backgroundImage: "url(" + image.image + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className={styles.imageWrapper}>
                    {/* <Image
                      // layout="fill"

                      className={styles.image}
                      src={image.image}
                      height={500}
                      width={500}
                    ></Image> */}
                  </div>
                </div>
              )}
            </Grid>
          ))}
        </>
        <Grid container className={styles.GridContainer2}>
          {pickedImages.length == 6 ? (
            <>
              <img
                src="/next-icon.png"
                className={styles.nextIcon}
                onMouseDown={() => setCurrentStage(3)}
              />
            </>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
};

export default ImagesPicker;
