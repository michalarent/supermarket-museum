import Grid from "@material-ui/core/Grid";
import GridItem from "@material-ui/core/Grid";
import styles from "/styles/ukraine.module.css";
import useSound from "use-sound";

export default function FinalSelection({
  pickedImages,
  pickedSounds,
  setCurrentStage,
}) {
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
      <Grid container className={styles.GridContainer} spacing={2}>
        <Grid item xs={6} md={6}>
          {finalImages.map((image) => (
            <Grid className={styles.GridItem} key={image.id}>
              <div
                className={styles.Image_buttonContainer}
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
        <Grid item xs={6} md={6}>
          {finalSounds.map((sound) => (
            <Grid item className={styles.GridItem} key={sound.id}>
              <>
                <div
                  className={styles.buttonContainer}
                  onClick={handleClick}
                  data-info={sound.id}
                >
                  <p className={styles.indicator}>{sound.id}</p>
                </div>
              </>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} md={12}>
          <button onClick={() => setCurrentStage(0)}>Start again!</button>
        </Grid>
      </Grid>
    </>
  );
}
