import { useState } from "react";
import "./styles.css";
import { Options } from "./Options";
import { chatbox } from "./chatbox";

function App() {
  return (
    <>
      <div className="border">
        <div className="wrapper">
          <div className="left-side"></div>
          <div className="middle">
            <chatbox />
          </div>
          <div className="right-side">
            <Options />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
