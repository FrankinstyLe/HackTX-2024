export function OptionMenu(setPersona, toggleVisibility) {
    <div className="menu-wrapper">
        <div className="persona" id="1" onClick={setPersona}>
            Aiko
        </div>
        <div className="persona" id="2" onClick={setPersona}>
            Hana
        </div>
        <div className="persona" id="3" onClick={setPersona}>
            Rika
        </div>
        <button className="close" onClick={toggleVisibility}>
            CLOSE
        </button>
    </div>;
}
