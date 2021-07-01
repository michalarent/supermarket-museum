import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "/styles/ukraine.module.css";
import { PlayArrow } from "@material-ui/icons";
import { Stop } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Howl, Howler } from "howler";
import { Check, Close } from "@material-ui/icons";

import useSound from "use-sound";

const SoundsPicker = ({ pickedSounds, setPickedSounds, setCurrentStage }) => {
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

  function handleStopNote(midiNumber) {
    switch (midiNumber) {
      case 71:
        H_0.current.stop();
        H_2.current.stop();
        H_3.current.stop();
        H_4.current.stop();
        H_1.current.stop();
        console.log(59);
        break;
    }
  }

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

  function handlePlaySound(midiNumber) {}

  const initialArray = [];

  //   const [pickedSounds, setPickedSounds] = React.useState(initialArray);

  const handleEntry = (entry) => {
    var array = [...pickedSounds];
    var index = array.indexOf(entry);

    if (index !== -1) {
      array.splice(index, 1);
      setPickedSounds(array);
    } else {
      if (pickedSounds.length == 6) {
        pickedSounds.shift();
      }
      setPickedSounds([...pickedSounds, entry]);
    }
  };

  const [soundPlaying, setSoundPlaying] = React.useState(false);

  const handleSelectSound = (id) => {
    console.log(id);
    // var id = event.target.dataset.info;
    if (id == undefined) {
      return;
    }
    handleEntry(id);
    console.log(pickedSounds);
  };
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
    console.log(id);
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

  function stopAllSoundsAndMove() {
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
    setCurrentStage(2);
  }

  return (
    <>
      <>
        <Grid container className={styles.GridContainer} spacing={2}>
          <Grid item xs={12} md={12} className={styles.GridItemHeader}>
            <p>
              What kind of sounds would you LIKE TO BE SURROUNDED with on a
              daily basis? Choose six and click “next”.
            </p>
          </Grid>
          <>
            {sounds.map((sound) => (
              <Grid item className={styles.GridItem} key={sound.id}>
                <IconButton
                  onClick={(e) => handleSelectSound(sound.id)}
                  data-info={sound.id}
                  style={{ position: "absolute" }}
                >
                  {pickedSounds.includes(sound.id) ? (
                    <Check
                      className={styles.indicator}
                      style={{ fill: "green", pointerEvents: "none" }}
                    />
                  ) : (
                    <Close
                      className={styles.indicator}
                      style={{ fill: "gray", pointerEvents: "none !important" }}
                    />
                  )}
                </IconButton>
                {pickedSounds.includes(sound.id) ? (
                  <>
                    <div
                      className={styles.buttonContainerSelected}
                      onClick={handleClick}
                      data-info={sound.id}
                    ></div>
                  </>
                ) : (
                  <div
                    className={styles.buttonContainer}
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
                )}
              </Grid>
            ))}
          </>
        </Grid>
        <Grid container className={styles.GridContainer2}>
          {pickedSounds.length == 6 ? (
            <>
              <img
                src="/next-icon.png"
                className={styles.nextIcon}
                onMouseDown={stopAllSoundsAndMove}
              />
            </>
          ) : null}
        </Grid>
      </>
    </>
  );
};

export default SoundsPicker;
