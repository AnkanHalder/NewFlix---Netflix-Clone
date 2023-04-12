import React from "react";
import { useState } from "react";
import LeftSideControls from "./leftSideControls";
import RightSideControls from "./rightSideControls";

function PlayerControls(props){
    const {videoState, setState, seek} = props;
    function handleSeek(e){
        if(e.target.getAttribute('name') == "leftSeek") {seek(-15,false);}
        else if(e.target.getAttribute('name') == "rightSeek") seek(10,false);
    }
    function handlePlayPause(){
        if ( props.videoState.playing)  setState({...videoState, playing:false});
        else setState({...videoState, playing:true}); 
    }
    return (
        <div className="playerControls">
            <div className="sideControls">
                <LeftSideControls videoState={videoState} setVideoState={setState} seek={seek} />
            </div>

           <button className="seekBtn Btn"  onClick={handleSeek}>
                <i name="leftSeek" class="LeftBtn fa-solid fa-rotate-left fa-2xl" style={{color: "#ed0c50"}}></i>
           </button> 

            <button className="playPauseBtn Btn" onClick={handlePlayPause} >
                { props.videoState.playing?<i class="playBtn fa-regular fa-circle-play fa-2xl" style={{color: "#ed0c50"}}></i>
                        :
                <i class="playBtn fa-regular fa-circle-pause fa-2xl" style={{color: "#ed0c50"}}></i>
                }
            </button>
            
            <button className="seekBtn Btn"   onClick={handleSeek}>
            <i name="rightSeek" class="LeftBtn fa-solid fa-rotate-right fa-2xl" style={{color: "#ed0c50"}}></i>
            </button>


            <div className="playbackControls">
                <RightSideControls setVideoState={setState} videoState={videoState}/>
            </div>
        </div>
    )
}

export default PlayerControls;