import React from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import useSound from "use-sound";
import ReactHowler from "react-howler";
import { useAudioPlayer } from "react-use-audio-player";
import { PlaylistPlayRounded } from "@material-ui/icons";
import Key from "../../../components/synthesizer/Key";
import { Howl, Howler } from "howler";

const sounds = [
  {
    note: "A",
    sounds: {
      0: "/sounds/robert/A!.mp3",
      1: "/sounds/robert/A1.mp3",
      2: "/sounds/robert/A2.mp3",
      3: "/sounds/robert/A3.mp3",
      4: "/sounds/robert/A4.mp3",
    },
  },
];

const keys = [
  {
    sounds: {
      0: "57",
      1: "/sounds/robert/A!.mp3",
      2: "/sounds/robert/A1.mp3",
      3: "/sounds/robert/A2.mp3",
      4: "/sounds/robert/A3.mp3",
      5: "/sounds/robert/A4.mp3",
    },
  },
  {
    sounds: {
      0: "58",
      1: "/sounds/robert/Ais!.mp3",
      2: "/sounds/robert/Ais1.mp3",
      3: "/sounds/robert/Ais2.mp3",
      4: "/sounds/robert/Ais3.mp3",
      5: "/sounds/robert/Ais4.mp3",
    },
  },
  {
    sounds: {
      0: "59",
      1: "/sounds/robert/H!.mp3",
      2: "/sounds/robert/H1.mp3",
      3: "/sounds/robert/H2.mp3",
      4: "/sounds/robert/H3.mp3",
      5: "/sounds/robert/H4.mp3",
    },
  },
];

export default function Synthesizer() {
  const [currentNote, setCurrentNote] = React.useState(0);
  const [note, setNote] = React.useState();

  const firstNote = MidiNumbers.fromNote("c4");
  const lastNote = MidiNumbers.fromNote("b4");

  const A_0 = React.useRef(
    new Howl({
      src: ["/sounds/robert/A!.mp3"],
    })
  );
  const A_1 = React.useRef(
    new Howl({
      src: ["/sounds/robert/A1.mp3"],
    })
  );
  const A_2 = React.useRef(
    new Howl({
      src: ["/sounds/robert/A2.mp3"],
    })
  );
  const A_3 = React.useRef(
    new Howl({
      src: ["/sounds/robert/A3.mp3"],
    })
  );
  const A_4 = React.useRef(
    new Howl({
      src: ["/sounds/robert/A4.mp3"],
    })
  );
  const Ais_0 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Ais!.mp3"],
    })
  );
  const Ais_1 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Ais1.mp3"],
    })
  );
  const Ais_2 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Ais2.mp3"],
    })
  );
  const Ais_3 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Ais3.mp3"],
    })
  );
  const Ais_4 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Ais4.mp3"],
    })
  );
  const H_0 = React.useRef(
    new Howl({
      src: ["/sounds/robert/H!.mp3"],
    })
  );
  const H_1 = React.useRef(
    new Howl({
      src: ["/sounds/robert/H1.mp3"],
    })
  );
  const H_2 = React.useRef(
    new Howl({
      src: ["/sounds/robert/H2.mp3"],
    })
  );
  const H_3 = React.useRef(
    new Howl({
      src: ["/sounds/robert/H3.mp3"],
    })
  );
  const H_4 = React.useRef(
    new Howl({
      src: ["/sounds/robert/H4.mp3"],
    })
  );

  const C_0 = React.useRef(
    new Howl({
      src: ["/sounds/robert/C!.mp3"],
    })
  );
  const C_1 = React.useRef(
    new Howl({
      src: ["/sounds/robert/C1.mp3"],
    })
  );
  const C_2 = React.useRef(
    new Howl({
      src: ["/sounds/robert/C2.mp3"],
    })
  );
  const C_3 = React.useRef(
    new Howl({
      src: ["/sounds/robert/C3.mp3"],
    })
  );
  const C_4 = React.useRef(
    new Howl({
      src: ["/sounds/robert/C4.mp3"],
    })
  );
  const Cis_0 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Cis!.mp3"],
    })
  );
  const Cis_1 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Cis1.mp3"],
    })
  );
  const Cis_2 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Cis2.mp3"],
    })
  );
  const Cis_3 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Cis3.mp3"],
    })
  );
  const Cis_4 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Cis4.mp3"],
    })
  );
  const D_0 = React.useRef(
    new Howl({
      src: ["/sounds/robert/D!.mp3"],
    })
  );
  const D_1 = React.useRef(
    new Howl({
      src: ["/sounds/robert/D1.mp3"],
    })
  );
  const D_2 = React.useRef(
    new Howl({
      src: ["/sounds/robert/D2.mp3"],
    })
  );
  const D_3 = React.useRef(
    new Howl({
      src: ["/sounds/robert/D3.mp3"],
    })
  );
  const D_4 = React.useRef(
    new Howl({
      src: ["/sounds/robert/D4.mp3"],
    })
  );
  const Dis_0 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Dis!.mp3"],
    })
  );
  const Dis_1 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Dis1.mp3"],
    })
  );
  const Dis_2 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Dis2.mp3"],
    })
  );
  const Dis_3 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Dis3.mp3"],
    })
  );
  const Dis_4 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Dis4.mp3"],
    })
  );
  const E_0 = React.useRef(
    new Howl({
      src: ["/sounds/robert/E!.mp3"],
    })
  );
  const E_1 = React.useRef(
    new Howl({
      src: ["/sounds/robert/E1.mp3"],
    })
  );
  const E_2 = React.useRef(
    new Howl({
      src: ["/sounds/robert/E2.mp3"],
    })
  );
  const E_3 = React.useRef(
    new Howl({
      src: ["/sounds/robert/E3.mp3"],
    })
  );
  const E_4 = React.useRef(
    new Howl({
      src: ["/sounds/robert/E4.mp3"],
    })
  );
  const F_0 = React.useRef(
    new Howl({
      src: ["/sounds/robert/F!.mp3"],
    })
  );
  const F_1 = React.useRef(
    new Howl({
      src: ["/sounds/robert/F1.mp3"],
    })
  );
  const F_2 = React.useRef(
    new Howl({
      src: ["/sounds/robert/F2.mp3"],
    })
  );
  const F_3 = React.useRef(
    new Howl({
      src: ["/sounds/robert/F3.mp3"],
    })
  );
  const F_4 = React.useRef(
    new Howl({
      src: ["/sounds/robert/F4.mp3"],
    })
  );
  const Fis_0 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Fis!.mp3"],
    })
  );
  const Fis_1 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Fis1.mp3"],
    })
  );
  const Fis_2 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Fis2.mp3"],
    })
  );
  const Fis_3 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Fis3.mp3"],
    })
  );
  const Fis_4 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Fis4.mp3"],
    })
  );
  const G_0 = React.useRef(
    new Howl({
      src: ["/sounds/robert/G!.mp3"],
    })
  );
  const G_1 = React.useRef(
    new Howl({
      src: ["/sounds/robert/G1.mp3"],
    })
  );
  const G_2 = React.useRef(
    new Howl({
      src: ["/sounds/robert/G2.mp3"],
    })
  );
  const G_3 = React.useRef(
    new Howl({
      src: ["/sounds/robert/G3.mp3"],
    })
  );
  const G_4 = React.useRef(
    new Howl({
      src: ["/sounds/robert/G4.mp3"],
    })
  );
  const Gis_0 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Gis!.mp3"],
    })
  );
  const Gis_1 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Gis1.mp3"],
    })
  );
  const Gis_2 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Gis2.mp3"],
    })
  );
  const Gis_3 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Gis3.mp3"],
    })
  );
  const Gis_4 = React.useRef(
    new Howl({
      src: ["/sounds/robert/Gis4.mp3"],
    })
  );

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  function getSoundsForMidiNote(midiNumber) {
    var soundz = [];
    for (var i = 0; i < keys.length; i++) {
      console.log(i);
      if (keys[i].sounds[0] == midiNumber.toString()) {
        soundz = keys[i].sounds;
        console.log(soundz);
      }
    }
    return soundz;
  }

  function A_PLAY() {
    var rand = Math.floor(Math.random() * 4 + 1);
    A_0.current.play();
    switch (rand) {
      case 1:
        A_1.current.play();
      case 2:
        A_2.current.play();
      case 3:
        A_3.current.play();
      case 4:
        A_4.current.play();
    }
  }

  function AIS_PLAY() {
    var rand = Math.floor(Math.random() * 4 + 1);
    Ais_0.current.play();
    switch (rand) {
      case 1:
        Ais_1.current.play();
      case 2:
        Ais_2.current.play();
      case 3:
        Ais_3.current.play();
      case 4:
        Ais_4.current.play();
    }
  }
  function H_PLAY() {
    var rand = Math.floor(Math.random() * 4 + 1);
    H_0.current.play();
    switch (rand) {
      case 1:
        H_1.current.play();
      case 2:
        H_2.current.play();
      case 3:
        H_3.current.play();
      case 4:
        H_4.current.play();
    }
  }
  function C_PLAY() {
    var rand = Math.floor(Math.random() * 4 + 1);
    C_0.current.play();
    switch (rand) {
      case 1:
        C_1.current.play();
      case 2:
        C_2.current.play();
      case 3:
        C_3.current.play();
      case 4:
        C_4.current.play();
    }
  }
  function CIS_PLAY() {
    var rand = Math.floor(Math.random() * 4 + 1);
    Cis_0.current.play();
    switch (rand) {
      case 1:
        Cis_1.current.play();
      case 2:
        Cis_2.current.play();
      case 3:
        Cis_3.current.play();
      case 4:
        Cis_4.current.play();
    }
  }
  function D_PLAY() {
    var rand = Math.floor(Math.random() * 4 + 1);
    D_0.current.play();
    switch (rand) {
      case 1:
        D_1.current.play();
      case 2:
        D_2.current.play();
      case 3:
        D_3.current.play();
      case 4:
        D_4.current.play();
    }
  }
  function DIS_PLAY() {
    var rand = Math.floor(Math.random() * 4 + 1);
    Dis_0.current.play();
    switch (rand) {
      case 1:
        Dis_1.current.play();
      case 2:
        Dis_2.current.play();
      case 3:
        Dis_3.current.play();
      case 4:
        Dis_4.current.play();
    }
  }

  function E_PLAY() {
    var rand = Math.floor(Math.random() * 4 + 1);
    E_0.current.play();
    switch (rand) {
      case 1:
        E_1.current.play();
      case 2:
        E_2.current.play();
      case 3:
        E_3.current.play();
      case 4:
        E_4.current.play();
    }
  }

  function F_PLAY() {
    var rand = Math.floor(Math.random() * 4 + 1);
    F_0.current.play();
    switch (rand) {
      case 1:
        F_1.current.play();
      case 2:
        F_2.current.play();
      case 3:
        F_3.current.play();
      case 4:
        F_4.current.play();
    }
  }
  function Fis_PLAY() {
    var rand = Math.floor(Math.random() * 4 + 1);
    Fis_0.current.play();
    switch (rand) {
      case 1:
        Fis_1.current.play();
      case 2:
        Fis_2.current.play();
      case 3:
        Fis_3.current.play();
      case 4:
        Fis_4.current.play();
    }
  }

  function G_PLAY() {
    var rand = Math.floor(Math.random() * 4 + 1);
    G_0.current.play();
    switch (rand) {
      case 1:
        G_1.current.play();
      case 2:
        G_2.current.play();
      case 3:
        G_3.current.play();
      case 4:
        G_4.current.play();
    }
  }
  function Gis_PLAY() {
    var rand = Math.floor(Math.random() * 4 + 1);
    Gis_0.current.play();
    switch (rand) {
      case 1:
        Gis_1.current.play();
      case 2:
        Gis_2.current.play();
      case 3:
        Gis_3.current.play();
      case 4:
        Gis_4.current.play();
    }
  }

  function handlePlayNoteRoot(midiNumber) {
    switch (midiNumber) {
      case 60:
        C_PLAY();
        break;
      case 61:
        CIS_PLAY();

        break;
      case 62:
        D_PLAY();
        console.log(61);
        break;
      case 63:
        DIS_PLAY();
        console.log(61);
        break;
      case 64:
        E_PLAY();
        console.log(61);
        break;
      case 65:
        F_PLAY();
        console.log(61);
        break;
      case 66:
        Fis_PLAY();
        console.log(61);
        break;
      case 67:
        G_PLAY();
        console.log(61);
        break;
      case 68:
        Gis_PLAY();
        console.log(61);
        break;
      case 69:
        A_PLAY();
        break;
      case 70:
        AIS_PLAY();
        console.log(58);
        break;
      case 71:
        H_PLAY();
        console.log(59);
        break;
    }
  }

  function handleStopNote(midiNumber) {
    switch (midiNumber) {
      case 60:
        C_0.current.stop();
        C_2.current.stop();
        C_3.current.stop();
        C_4.current.stop();
        C_1.current.stop();
        console.log(60);
        break;
      case 61:
        Cis_0.current.stop();
        Cis_2.current.stop();
        Cis_3.current.stop();
        Cis_4.current.stop();
        Cis_1.current.stop();
        console.log(61);
        break;
      case 62:
        D_0.current.stop();
        D_2.current.stop();
        D_3.current.stop();
        D_4.current.stop();
        D_1.current.stop();
        console.log(61);
        break;
      case 63:
        Dis_0.current.stop();
        Dis_2.current.stop();
        Dis_3.current.stop();
        Dis_4.current.stop();
        Dis_1.current.stop();
        console.log(61);
        break;
      case 64:
        E_0.current.stop();
        E_2.current.stop();
        E_3.current.stop();
        E_4.current.stop();
        E_1.current.stop();
        console.log(61);
        break;
      case 65:
        F_0.current.stop();
        F_2.current.stop();
        F_3.current.stop();
        F_4.current.stop();
        F_1.current.stop();
        console.log(61);
        break;
      case 66:
        Fis_0.current.stop();
        Fis_2.current.stop();
        Fis_3.current.stop();
        Fis_4.current.stop();
        Fis_1.current.stop();
        console.log(61);
        break;
      case 67:
        G_0.current.stop();
        G_2.current.stop();
        G_3.current.stop();
        G_4.current.stop();
        G_1.current.stop();
        console.log(61);
        break;
      case 68:
        Gis_0.current.stop();
        Gis_2.current.stop();
        Gis_3.current.stop();
        Gis_4.current.stop();
        Gis_1.current.stop();
        console.log(61);
        break;
      case 69:
        A_0.current.stop();
        A_2.current.stop();
        A_3.current.stop();
        A_4.current.stop();
        A_1.current.stop();

        console.log(57);
        break;
      case 70:
        Ais_0.current.stop();
        Ais_2.current.stop();
        Ais_3.current.stop();
        Ais_4.current.stop();
        Ais_1.current.stop();
        console.log(58);
        break;
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

  function handlePlayNoteAmbience(midiNumber) {
    var soundz = getSoundsForMidiNote(midiNumber);
    var rand = Math.floor(Math.random() * 4 + 1);
    sound2._src = soundz[rand];
    sound2.load();
    sound2.play();
  }

  return (
    <>
      <Piano
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={(midiNumber) => {
          console.log(midiNumber);
          handlePlayNoteRoot(midiNumber);
        }}
        stopNote={(midiNumber) => {
          handleStopNote(midiNumber);
        }}
        width={1000}
        keyboardShortcuts={keyboardShortcuts}
      />
    </>
  );
}
