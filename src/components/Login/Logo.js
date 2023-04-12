import React from "react";
import logo from "../../static/img/NEWFLIX.png";


function Logo(){
    return (
        <div className="logo">
            <a  href="/"><img src={logo} alt="NewFlix Logo" /></a>
        </div>
    )
}

export default Logo;