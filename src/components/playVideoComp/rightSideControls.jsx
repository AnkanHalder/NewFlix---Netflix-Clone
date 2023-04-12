
import React from "react";
import { useState } from "react";

function LeftSideControls(props) {
    const [active,setActive] = useState(1);
    function handleClick(e){
        const playbackRate = parseFloat(e.currentTarget.getAttribute('name'))
        props.setVideoState({...props.videoState, playback: playbackRate});
        setActive(playbackRate);       
    } 
    return (
    <div className="rightSideControls">
        <button onClick={handleClick} name="0.25" className={"playbackBtn Btn " + ((active==0.25)?"activeBtn":"")}>
        0.25x</button>
        <button onClick={handleClick} name="0.5" className={"playbackBtn Btn "+ ((active==0.5)?"activeBtn":"")}>
        0.5x</button>
        <button onClick={handleClick} name="1" className={"playbackBtn Btn "+ ((active==1)?"activeBtn":"")}>
        1x</button>
        <button onClick={handleClick} name="1.5" className={"playbackBtn Btn "+ ((active==1.5)?"activeBtn":"")}>
        1.5x</button>
        <button onClick={handleClick} name="2" className={"playbackBtn Btn "+ ((active==2)?"activeBtn":"")}>
        2x</button>
    </div>
    )

}
export default LeftSideControls;