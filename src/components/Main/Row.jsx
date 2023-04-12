import axios from "axios";
import React from "react";
import VideoElement from "./VideoElement";
import { useState,useEffect } from "react";

function VideoRow(video,cat){
    return  <VideoElement key = {video._id+cat} id={video._id} imageLink = {video.imageLink} videoLink = {video.videoLink}
        name = {video.name} Description = {video.Description} Tags = {video.Tags} Likes = {video.Likes} 
        Actors = {video.Actors}   />
}

async function GetRow(cat,limit=1000){
    let api = "http://localhost:8000/main/getRow/" + cat + "/" + limit;
    const response = await axios.get(api);
    return response.data;

}
function Row(props){
    const [videoList, setVideoList] = useState([]);
    const [listIndex,setListIndex] = useState(0);
    const [fullList,setFullList] = useState([]);

    useEffect(() => {
        GetRow(props.catagory).then((row) =>{
            let a = [];
            let index = listIndex;
            for(let j=0;j<5;j++){
                if (index >= row.length) index = index%(row.length);
                a[j]=row[index];
                index += 1;
            }
            setVideoList(a);
            setFullList(row);
            setListIndex((listIndex+5));
         });
        },[]);

    function handelClick(e){
        let a = [];
        if (e.currentTarget.name=="LeftSlideBtn"){
            let index = listIndex;
            for(let j=0;j<5;j++){
                if (index >= fullList.length) index = index%(fullList.length);
                a[j]=fullList[index];
                index += 1;
            }
            setVideoList(a);
            setListIndex(listIndex+5);
        }
        else if (e.currentTarget.name=="RightSlideBtn") {
            let index = listIndex - 1;
            for(let j=0;j<5;j++){
                if (index >= fullList.length) index = index%(fullList.length);
                a[j]=fullList[index];
                index += 1;
            }
            setVideoList(a);
            setListIndex(listIndex+4);
        }

    }
    return(
        <div className="ROW">
            <h1 className="catagoryName">{props.catagory}</h1>
            <div className="videoElementRow">
                <button  className="LeftSlideBtn Btn" name="LeftSlideBtn" onMouseDown={handelClick}>
                    <i class="fa-solid fa-angle-left fa-2xl"></i>
                </button>
                    {videoList.map(VideoRow,props.catagory)}
                <button  className="RightSlideBtn Btn" name="RightSlideBtn" onMouseDown={handelClick}>
                <i class="fa-solid fa-angle-right fa-2xl"></i>
                </button>
            </div>
            
        </div>
    )

}
export default Row;