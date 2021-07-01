import Grid from "@material-ui/core/Grid";
import GridItem from "@material-ui/core/Grid";
import styles from "/styles/ukraine.module.css";
import React from "react";
import useSound from "use-sound";
import { PlayArrow, Stop } from "@material-ui/icons";

export default function FinalSelection({
  pickedImages,
  pickedSounds,
  setCurrentStage,
}) {
  const sound_1 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/1.m4a"],
    })
  );
  const sound_2 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/2.mp3"],
    })
  );
  const sound_3 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/3.mp3"],
    })
  );
  const sound_4 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/4.mp3"],
    })
  );
  const sound_5 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/5.wav"],
    })
  );
  const sound_6 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/6.wav"],
    })
  );
  const sound_7 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/7.m4a"],
    })
  );
  const sound_8 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/8.mp3"],
    })
  );
  const sound_9 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/9.m4a"],
    })
  );
  const sound_10 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/10.m4a"],
    })
  );
  const sound_11 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/11.m4a"],
    })
  );
  const sound_12 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/12.mp3"],
    })
  );
  const sound_13 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/13.wav"],
    })
  );
  const sound_14 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/14.m4a"],
    })
  );
  const sound_15 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/15.mp3"],
    })
  );
  const sound_16 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/16.mp3"],
    })
  );
  const sound_17 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/17.mp3"],
    })
  );
  const sound_18 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/18.mp3"],
    })
  );
  const sound_19 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/19.mp3"],
    })
  );
  const sound_20 = React.useRef(
    new Howl({
      src: ["/sounds/ukraine/final/20.mp3"],
    })
  );

  const sounds = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
    { id: "13" },
    { id: "14" },
    { id: "15" },
    { id: "16" },
    { id: "17" },
    { id: "18" },
    { id: "19" },
    { id: "20" },
  ];
  const [soundPlaying, setSoundPlaying] = React.useState(false);

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

  const handleClick = (event) => {
    var id = event.target.dataset.info;
    if (id == undefined) {
      return;
    }
    if (soundPlaying) {
      sound_1.current.stop();
      sound_2.current.stop();
      sound_3.current.stop();
      sound_4.current.stop();
      sound_5.current.stop();
      sound_6.current.stop();
      sound_7.current.stop();
      sound_8.current.stop();
      sound_9.current.stop();
      sound_10.current.stop();
      sound_11.current.stop();
      sound_12.current.stop();
      sound_13.current.stop();
      sound_14.current.stop();
      sound_15.current.stop();
      sound_16.current.stop();
      sound_17.current.stop();
      sound_18.current.stop();
      sound_19.current.stop();
      sound_20.current.stop();
      setSoundPlaying(false);
      return;
    }
    switch (parseInt(id)) {
      case 1:
        sound_1.current.play();
        break;
      case 2:
        sound_2.current.play();
        break;
      case 3:
        sound_3.current.play();
        break;
      case 4:
        sound_4.current.play();
        break;
      case 5:
        sound_5.current.play();
        break;
      case 6:
        sound_6.current.play();
        break;
      case 7:
        sound_7.current.play();
        break;
      case 8:
        sound_8.current.play();
        break;
      case 9:
        sound_9.current.play();
        break;
      case 10:
        sound_10.current.play();
        break;
      case 11:
        sound_11.current.play();
        break;
      case 12:
        sound_12.current.play();
        break;
      case 13:
        sound_13.current.play();
        break;
      case 14:
        sound_14.current.play();
        break;
      case 15:
        sound_15.current.play();
        break;
      case 16:
        sound_16.current.play();
        break;
      case 17:
        sound_17.current.play();
        break;
      case 18:
        sound_18.current.play();
        break;
      case 19:
        sound_19.current.play();
        break;
      case 20:
        sound_20.current.play();
        break;
    }
    setSoundPlaying(true);
  };

  console.log(pickedImages);

  function getFinalImages() {
    var temp = [];
    for (var i = 0; i < Object.values(pickedImages).length; i++) {
      console.log(pickedImages[i]);
      var idInt = parseInt(pickedImages[i]);
      temp.push(images[idInt - 1]);
    }
    console.log(temp);
    return temp;
  }
  function getFinalSounds() {
    var temp = [];
    for (var i = 0; i < Object.values(pickedSounds).length; i++) {
      console.log(pickedSounds[i]);
      var idInt = parseInt(pickedSounds[i]);
      temp.push(sounds[idInt - 1]);
    }
    console.log(temp);
    return temp;
  }

  const finalImages = getFinalImages();
  const finalSounds = getFinalSounds();

  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={styles.GridContainer}
        spacing={0}
      >
        <Grid item xs={6} md={12} className={styles.GridItemHeader}>
          <p>Are you living the live you want to live?</p>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          xs={6}
          md={6}
          lg={6}
          spacing={2}
        >
          {finalImages.map((image) => (
            <Grid
              item
              md={6}
              style={{}}
              className={styles.GridItem}
              key={image.id}
            >
              <div
                className={styles.Image_buttonContainerFinal}
                data-info={image.id}
                style={{
                  backgroundImage: "url(" + image.image + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          xs={6}
          md={6}
          spacing={2}
          style={{ marginLeft: "1vw" }}
        >
          {finalSounds.map((sound) => (
            <Grid item className={styles.GridItem} key={sound.id}>
              <>
                <div
                  className={styles.Image_buttonContainerFinal}
                  style={{
                    background: "black",
                  }}
                  onClick={handleClick}
                  data-info={sound.id}
                >
                  <p className={styles.indicator}>
                    {soundPlaying ? (
                      <Stop style={{ fill: "white" }} />
                    ) : (
                      <PlayArrow style={{ fill: "white" }} />
                    )}
                  </p>
                </div>
              </>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}>
        <button onClick={() => setCurrentStage(0)}>Start again!</button>
      </Grid>
    </>
  );
}
