import axios from "axios";
import React from "react";
import VideoElement from "./VideoElement";
import { useState,useEffect } from "react";
import ReactPlayer from "react-player";



async function getBigVideoList(cat,limit=1000){
    let api = "http://localhost:8000/main/getRow/" + cat + "/" + limit;
    const response = await axios.get(api);
    return response.data;

}
function BigVideoRow(props){
    const [videoList, setVideoList] = useState([]);
    const [currVideo, setVideo] = useState(0);

    function VideoRow(video){
        function handelClick(){
            console.log("clicked a Button");
            setVideo(video);
        }
        return  (
            <div className="videoSetter" >
                    <button style={{backgroundColor: "transparent", border:"none"}} onClick={handelClick}>
                        <div className = 
                        {"videoSetterButton " + ((video.videoLink==currVideo.videoLink)?" activeVideoBtn":"")}>
                        </div>
                    </button>
            </div>
        )
    }

    console.log(videoList);
    useEffect(() =>{
        getBigVideoList("Action",4).then((bigVideoList)=> {
            setVideo(bigVideoList[0])
            setVideoList(bigVideoList);
            });
    },[]);
    return(
        <div className="bigVideoCarouselContainer">
            <div className="videoDetails">
                <h1>{currVideo.name}</h1>
                <p>{currVideo.Description}</p>
            </div>

            <div className="bigVideoContainer">
                <ReactPlayer width='100%' height='100%' playing={true}
                className="bigVideo" url={currVideo.videoLink}/>
            </div>
            <div className="bigVideoCarousel">
                {videoList.map(VideoRow)}
            </div>
        </div>
    )

}
export default BigVideoRow;