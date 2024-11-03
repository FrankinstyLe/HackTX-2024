import { useState } from "react";
import nurseBg from "./img/backgrounds/nurse_background.png";
import boxingBg from "./img/backgrounds/boxing_background.webp";
import schoolBg from "./img/backgrounds/school_background.jpg";

export function Options() {
  const [isVisible, setVisibility] = useState(true);
  const personaBackgrounds = {
    nurse: nurseBg,
    boxing: boxingBg,
    school: schoolBg,
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
          "url(img/backgrounds/school_background.jpg)";
        console.log("test");

        break;
      case 1:
        persona[1];
        border.style["background-image"] =
          "url(./img/backgrounds/nurse_background.png)";
        console.log(persona);
        break;
      case 2:
        persona[2];
        border.style.background = "url(img/backgrounds/boxing_background.webp)";
        console.log(persona);
        break;
    }
  };

  return (
    <>
      {isVisible && (
        <div className="option-wrapper">
          <div onClick={() => changePersonality(0)} className="girl" id="1">
            Aiko
          </div>
          <br />
          <div onClick={() => changePersonality(1)} className="girl" id="2">
            Hana
          </div>
          <br />
          <div onClick={() => changePersonality(2)} className="girl" id="3">
            Rika
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
