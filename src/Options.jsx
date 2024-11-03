import { useState } from "react"

export function Options(){


    const [isVisible,setVisibility] = useState(true);

    const toggleVisibility = ()=>{
        setVisibility(!isVisible);
    } 


    return(
        <>
        {isVisible && <div className="option-wrapper">
            <div className="girl" id="1">Aiko</div>
            <div className="girl" id="2">Hana</div>
            <div className="girl" id="3">Rika</div>
            <button className="exit" onClick={toggleVisibility}>EXIT</button>
        </div>}
        {!isVisible && <div className="options-btn" onClick={toggleVisibility}>Options</div>}
        </>
    )
}
