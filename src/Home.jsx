import React from "react";
import './static/css/home.css';


function Home(){
    return (
        <div className="Home">
            <div className = "content">
            <h1 className = "homeHeading">ENJOY CONTENT THAT IS <span className="textSpan"></span></h1>
            <div className ="Text">
            <h1>An Email has been Sent To Your Account.</h1>
            <p >Thank You for Registering to NewFlix. Please Verify Your Email as a final step<br/>
            of the registration process to unlimited access to amazing and mind-blowing content.</p>
            </div>
            <button className="signIn"><b>SIGN IN</b></button>
            </div>
        </div>
        
        
    )
}

export default Home;