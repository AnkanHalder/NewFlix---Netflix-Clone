import React, { useState } from "react";
import SettingSlider from "./settingSlider";
import screenfull from "screenfull";

function LeftSideControls(props) {
    const [volOn, setVolOn] = useState(0);
    const {videoState, setVideoState, seek} = props;

    function handleSeek(e){
        if(e.target.getAttribute('name') == "leftSeek") {seek(-15,false);}
        else if(e.target.getAttribute('name') == "rightSeek") seek(10,false);
    }
    function handlePlayPause(){
        if ( props.videoState.playing)  setVideoState({...videoState, playing:false});
        else setVideoState({...videoState, playing:true}); 
    }
    function handleVol(){
        volOn?setVolOn(0):setVolOn(1);
    }
    function handleFullscreen(){
        if(screenfull.isEnabled){
            (screenfull.isFullscreen)? screenfull.exit() : screenfull.request();
        }
    }
    return (
        <div className="leftSideControls">
            {/* VOLUME COMTROL BUTTON AND SLIDER */}
            <div className="volumeControls" >
                <button className="volBtn Btn"  onClick={handleVol} style={{color: "#ed0c50"}}>
                    <i class="fa-solid fa-volume-high fa-2xl"></i>
                </button>
                <SettingSlider animState = {volOn}
                    sliderType="volume" valueToChange={videoState} setValue={setVideoState}
                    defaultValue={1} />
            </div>
            <div className="playControls" >
                {/* LEFT SEEK SIDE BUTTON */}
                <button className="seekBtn Btn"  onClick={handleSeek}>
                    <i name="leftSeek" class="LeftBtn fa-solid fa-rotate-left fa-2xl" style={{color: "#ed0c50"}}></i>
                </button> 
                {/* LEFT PLAY PAUSE BUTTON SIDE BUTTON */}
                <button className="playPauseBtn Btn" onClick={handlePlayPause} >
                    { props.videoState.playing?<i class="playBtn fa-regular fa-circle-play fa-2xl" style={{color: "#ed0c50"}}></i>
                            :
                    <i class="playBtn fa-regular fa-circle-pause fa-2xl" style={{color: "#ed0c50"}}></i>
                    }
                </button>
                {/* LEFT SEEK BUTTON SIDE BUTTON */}
                <button className="seekBtn Btn"   onClick={handleSeek}>
                    <i name="rightSeek" class="LeftBtn fa-solid fa-rotate-right fa-2xl" style={{color: "#ed0c50"}}></i>
                </button>
                {/* FULLSCREEN SIDE BUTTON */}
                <button className="Btn"   onClick={handleFullscreen}>
                    {(!screenfull.isFullscreen)?
                    <i name="fullscreen" class="LeftBtn fa-solid fa-expand fa-2xl" style={{color: "#ed0c50"}}></i>
                    :
                    <i name="fullscreen" class="LeftBtn fa-solid fa-compress fa-2xl" style={{color: "#ed0c50"}}></i>}
                </button> 
            </div>
        </div>
        
    )
}
export default LeftSideControls;