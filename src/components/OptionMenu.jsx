

export function OptionMenu(setGirl, toggleVisibility){
    <div className="menu-wrapper">
        <div className="girl" id="1" onClick={setGirl}>Aiko</div>
        <div className="girl" id="2" onClick={setGirl}>Hana</div>
        <div className="girl" id="3" onClick={setGirl}>Rika</div>
        <button className="close" onClick={toggleVisibility}>CLOSE</button>
    </div>
}