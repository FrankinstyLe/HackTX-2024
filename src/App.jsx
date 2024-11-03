import { useState } from "react";
import "./styles.css";
import { Options } from "./Options";

function App() {
  return (
    <>
      <div className="border">
        <div className="wrapper">
          <div className="left-side"></div>
          <div className="middle"></div>
          <div className="right-side">
            <Options />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
