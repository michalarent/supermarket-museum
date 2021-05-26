import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "/styles/ukraine.module.css";

import useSound from "use-sound";

const SoundsPicker = ({ pickedSounds, setPickedSounds, setCurrentStage }) => {
  const [play1] = useSound("/sounds/Kick_TL_4_TL.wav");
  const [play2] = useSound("/sounds/ukraine/2.mp3");
  const [play3] = useSound("/sounds/ukraine/3.mp3");
  const [play4] = useSound("/sounds/ukraine/4.mp3");
  const [play5] = useSound("/sounds/ukraine/5.mp3");
  const [play6] = useSound("/sounds/ukraine/6.mp3");
  const [play7] = useSound("/sounds/ukraine/7.mp3");
  const [play8] = useSound("/sounds/ukraine/8.mp3");
  const [play9] = useSound("/sounds/ukraine/9.mp3");
  const [play10] = useSound("/sounds/ukraine/10.mp3");
  const [play11] = useSound("/sounds/ukraine/11.mp3");
  const [play12] = useSound("/sounds/ukraine/12.mp3");
  const [play13] = useSound("/sounds/ukraine/13.mp3");
  const [play14] = useSound("/sounds/ukraine/14.mp3");
  const [play15] = useSound("/sounds/ukraine/15.mp3");

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
  ];
  // const [currentStage, setCurrentStage] = React.useState(0);

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

  const handleClick = (event) => {
    var id = event.target.dataset.info;
    console.log(id);
    switch (parseInt(id)) {
      case 1:
        play1();
        break;
      case 2:
        play2();
        break;
      case 3:
        play3();
        break;
      case 4:
        play4();
        break;
      case 5:
        play5();
        break;
      case 6:
        play6();
        break;
      case 7:
        play7();
        break;
      case 8:
        play8();
        break;
      case 9:
        play9();
        break;
      case 10:
        play10();
        break;
      case 11:
        play11();
        break;
      case 12:
        play12();
        break;
      case 13:
        play13();
        break;
      case 14:
        play14();
        break;
      case 15:
        play15();
        break;
    }

    handleEntry(id);
    console.log(pickedSounds);
  };

  return (
    <>
      <>
        <Grid container className={styles.GridContainer} spacing={2}>
          <Grid item xs={12} md={12} className={styles.GridItemHeader}>
            <p>Select and hear the sounds by clicking on the boxes below.</p>
          </Grid>
          <>
            {sounds.map((sound) => (
              <Grid item className={styles.GridItem} key={sound.id}>
                {pickedSounds.includes(sound.id) ? (
                  <>
                    <div
                      className={styles.buttonContainerSelected}
                      onClick={handleClick}
                      data-info={sound.id}
                    >
                      <p>{sound.id}</p>
                    </div>
                  </>
                ) : (
                  <div
                    className={styles.buttonContainer}
                    onClick={handleClick}
                    data-info={sound.id}
                  >
                    <p>{sound.id}</p>
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
              {pickedSounds.map((item) => {
                return item + " ";
              })}
            </p>
          </Grid>
          {pickedSounds.length == 6 ? (
            <Grid item xs={12} md={12} className={styles.GridItem}>
              <button onClick={() => setCurrentStage(2)}>Proceed</button>
            </Grid>
          ) : null}
        </Grid>
      </>
    </>
  );
};

export default SoundsPicker;
