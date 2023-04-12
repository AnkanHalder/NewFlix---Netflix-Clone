import { useState } from "react";
import React from "react";
import BigVideoRow from "./components/Main/bigVideoCarousel.jsx";
import GetRow from "./components/Main/Row.jsx";
import Row from "./components/Main/Row.jsx";
import "./static/css/main.css";

function Main(){
    return(
        <div className = "Main">
            <BigVideoRow />
            <Row catagory = "Action"/>
            <Row catagory = "Romedy"/>
            
        </div>
    )
}
export default Main;