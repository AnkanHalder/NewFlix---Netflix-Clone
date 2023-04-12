import React from "react";
import { Link } from "react-router-dom";


function VideoElement(props) {
    return(
        <div className="videoElement">
            <Link  to={"/playVideo/" + props.id}>
                { <img className="videoImg" src={props.imageLink} alt={props.Description}  /> }
                <div className="videoTitleDiv">
                    <h2 className="videoTitle">{props.name}</h2>
                </div>
            </Link>
            

        </div>
    )
}

export default VideoElement; 