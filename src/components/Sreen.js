import React, {useState} from 'react';
import "./styles.css"
const Screen = () => {
    let [screenStatus, setScreenStatus] = useState("off");
    let [buttonText, setButtonText] = useState("Turn On");

    const handleClick = () => {
        if(screenStatus === "System On") {
            setButtonText("Turn On");
            setScreenStatus("System Off")
        } else {
            setButtonText("Turn Off");
            setScreenStatus("System On")
        }
    }
    
    return (
    <div>
        <div className="screen">{screenStatus}</div>   
        <button onClick={handleClick}>{buttonText}</button>
    </div>)
}

export default Screen;