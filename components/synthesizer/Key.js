import React from "react";
import useSound from "use-sound";

export const Key = (midiNumber) => {
  const sounds = ["/sounds/robert/A!.mp3", "/sounds/robert/C!.mp3"];

  var path = "";
  switch (midiNumber) {
    case 57:
      path = sounds[0];
    default:
      path = sounds[1];
  }

  const [play, { stop }] = useSound(path);
  console.log(path);

  return <>{play}</>;
};

export default Key;
