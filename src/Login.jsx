import React,{useContext} from "react";

import Logo from "./components/Login/Logo";
import Body from "./components/Login/body";
import LoginBody from "./components/Login/login_body";
import './static/css/login.css'

function Login(){

    return (
        <div className="Login">
        <Body>
        <Logo />
        <LoginBody />
        </Body>
        </div>
        
        
    )
}

export default Login;