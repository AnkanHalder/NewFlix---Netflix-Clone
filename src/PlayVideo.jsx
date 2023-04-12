import React from "react";
import { useState,useEffect, useRef } from "react";
import {
    useParams,
  } from "react-router-dom";
import axios from "axios";
import screenfull from "screenfull";
import {useIdleTimer} from "react-idle-timer";
import PlayerControls from "./components/playVideoComp/PlayerControls";
import ReactPlayer from "react-player";
import Slider from "./components/playVideoComp/Slider";
import "./static/css/playVideo.css";



async function getVideo(id){
    let api = "http://localhost:8000/playVideo/" + id;
    const response = await axios.get(api);
    console.log(response.data);
    return response.data;

}



  function PlayVideo(){

    const [videoSrc, setVideoSrc] = useState("");
    const [mouseMoving, setMouseMoving] = useState(true);
    const {videoId } = useParams();
    const videoRef = useRef(null);
    const [videoState,setVideoState] = useState({
      playing: true,
      played: 0,
      currTime: 0,
      seeking: false,
      playback: 1,
      brightness: 0.5,
      volume : 1,
      isIdle: mouseMoving
    });
    const idleTimer = useIdleTimer({
      onIdle: () => {setMouseMoving(false);},
      onActive: () => {setMouseMoving(true)},
      timeout: 2000
    })
    const  handelVideoProgress = (progress) =>{
      if(!videoState.seeking) {
        setVideoState({...videoState, currTime: progress.playedSeconds , played: progress.played});
      }
    }

    function handelSeek(value,type){
        if (type) videoRef.current.seekTo(value,'fraction')
        else videoRef.current.seekTo(Math.max(0, videoState.currTime + value),'seconds');
    }
    function handleFullscreen(){
      if(screenfull.isEnabled){
          (screenfull.isFullscreen)? screenfull.exit() : screenfull.request();
      }
    }

    useEffect(() =>{
      getVideo(videoId).then((videoLink) =>{
          setVideoSrc(videoLink);
      })
    },[])

    return(
      <div className="playVideoWrapper" >        
        <div id="videoPlayer" className="videoPlayer" >
          <ReactPlayer ref={videoRef}  onProgress={handelVideoProgress}
          className="video" width='100%' height='100%' url={videoSrc} playbackRate={videoState.playback}
          volume={videoState.volume} playing={videoState.playing} />
          <div className="controls"  style={{display : (mouseMoving?"block":"none") ,
                     }}>
            <PlayerControls videoState={videoState} setState={setVideoState} seek={handelSeek}/>
            <Slider videoProgress={videoState} setVideoProgress={setVideoState} onSeek={handelSeek} />
            <button className="Btn fullscreenBtn"   onClick={handleFullscreen}>
                      {(!screenfull.isFullscreen)?
                      <i name="fullscreen" class="LeftBtn fa-solid fa-expand fa-2xl" style={{color: "#ed0c50"}}></i>
                      :
                      <i name="fullscreen" class="LeftBtn fa-solid fa-compress fa-2xl" style={{color: "#ed0c50"}}></i>}
            </button>
          </div>
        </div>
      </div>

    )
  }
  export default PlayVideo;