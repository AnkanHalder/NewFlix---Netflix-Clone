import React from "react";


function Slider(props){  
    function handelInput(e){
        const videoState = props.videoProgress;
        videoState.seeking = true;
        props.setVideoProgress(videoState );
        props.videoProgress.played = e.target.value;
        props.onSeek(e.target.value, true);
        videoState.seeking = false;
        props.setVideoProgress(videoState );
    }

    return(
       
        <div className="sliderControls" >
            <div class="sliderContainer">
                <span className="progressBar">
                    <span className="progress" style={{width: props.videoProgress.played*100+'%' }} ></span>
                </span>
                    <input value={props.videoProgress.played} onChange={handelInput} 
                    type="range" min="0" max="1" step="0.0005" className="slider" id="myRange"/>
                </div>
                
        </div>
    )
}

export default Slider;