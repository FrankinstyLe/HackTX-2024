import { useState } from "react";
import "./styles.css";
import "./components/OptionBtn"
import "./components/TextScreen"
import { OptionBtn } from "./components/OptionBtn";

function placeholder(){
  console.log("it worked");
}

function App() {
  return (
    <>

      <OptionBtn openMenu={placeholder}/>
    </>
  );
}

export default App;
