import { useState } from "react";
import marioBg from "./img/backgrounds/mario_background.jpg";
import pacmanBg from "./img/backgrounds/pacman_background.jpg";
import sonicBg from "./img/backgrounds/sonic_background.jpg";

export function Options() {
  const [isVisible, setVisibility] = useState(true);
  const personaBackgrounds = {
    mario: marioBg,
    pacman: pacmanBg,
    sonic: sonicBg,
  };
  const [persona, setPersona] = useState(personaBackgrounds);

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  const changePersonality = (personality) => {
    const border = document.getElementsByClassName("border");
    switch (personality) {
      case 0:
        persona[0];
        border.style["background-image"] =
          "url(img/backgrounds/mario_background.jpg)";
        console.log("test");

        break;
      case 1:
        persona[1];
        border.style["background-image"] =
          "url(./img/backgrounds/pacman_background.jpg)";
        console.log(persona);
        break;
      case 2:
        persona[2];
        border.style.background = "url(img/backgrounds/sonic_background.jpg)";
        console.log(persona);
        break;
    }
  };

  return (
    <>
      {isVisible && (
        <div className="option-wrapper">
          <div onClick={() => changePersonality(0)} className="persona" id="1">
            Mario
          </div>
          <br />
          <div onClick={() => changePersonality(1)} className="persona" id="2">
            Pacman
          </div>
          <br />
          <div onClick={() => changePersonality(2)} className="persona" id="3">
            Sonic
          </div>
          <br />
          <button className="exit" onClick={toggleVisibility}>
            EXIT
          </button>
        </div>
      )}
      {!isVisible && (
        <div className="options-btn" onClick={toggleVisibility}>
          Options
        </div>
      )}
    </>
  );
}
