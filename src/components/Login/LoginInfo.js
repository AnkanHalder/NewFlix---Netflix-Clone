import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context.js";
import Post from "./post.js";
import Input from "./Input.js";
import Button from "./Button.jsx";




function LoginInfo(){

    let navigate = useNavigate(); // navigate to Main video Page On Login

    const {loggedIn , setLogin} = useContext(LoginContext);  
    const [registered,setRegister] = useState(true); // check SignIn or Register state - true means signin 
    const [paswordCorrect, alertIncorrectPassword] = useState(true); // Set Wrong password Flag
    const [inputData, setData] = useState({
        email : "",
        password : "",
        name : "",
        phoneNumber : "",
        otpNum: "",
    }) // THIS IS DEFAULT FORM DATA 
    
    function handelInput(e){
        const {value,name} = e.target;
        setData((prevValue)=> {
            return {
               ...prevValue,
                [name]: value
            }
        })
    } // HANDELS INPUT AS USER TYPES and UPDATES THE HOOKS AS PER PREVIOUS VALUE

    function handelClick(e){
        navigate("/verifyEmail");    
    }

    async function submitHandler(e){
        e.preventDefault();
        // RESET DATA
        setData((prevValue) => {
            return {
                ...prevValue, // Email is not reset after submission
                password : "",
                name : "",
                phoneNumber : "",
                otpNum: "",
            }
        }); 
        // TRY TO POST TO BACKEND DATA AND HANDEL AUTH ..... CATCH error otherwise
        try{
            const res = await Post(inputData); // POST FORM DATA TO HOSTED BACKEND SERVER 
            // POST function imported from post.jsx component   
            console.log(res);
            if (!res.email){
                setRegister(false); // IF email fails to match ask user to register by setting Register hook to false
            }
            else{
                if (res.password){ // IF password matches redirect to Video Route [Login Completed]
                    setLogin(true);
                    navigate("/main");
                }
                else{
                    alertIncorrectPassword(false);
                }
            }   
        } catch(error){
            console.log(error);
        };  
    }

    

    return (
        <div className="login-info">
            <h2>{registered?"Sign In":"Create Account"}</h2>
            <form action="/" method="post" onSubmit={submitHandler}>
                {!registered && <Input type="text" name="name" OnChange={handelInput} value={inputData.name} placeholder="Full Name"/>}
                <Input value={inputData.email} OnChange={handelInput} type="email" name="email" placeholder="Email"/>
                <Input value={inputData.password}  OnChange={handelInput} style={registered && !paswordCorrect && "red"} type="password" name="password" placeholder="Password"/>
                {registered && !paswordCorrect && <p style={{color:"red"}}>Password Incorrect!!</p> }
                {!registered &&<Input type="number"  OnChange={handelInput} value={inputData.phoneNumber} name="phoneNumber" Pattern= "[789][0-9]{9}" placeholder="Phone Number"/>}
                {!registered &&<Input type="number"  OnChange={handelInput} value={inputData.otp} class="otpInput" name="otpNum" placeholder="Write OTP"/>}
                {!registered &&<Button text="Generate OTP" type="button" onClick={handelClick} class = "otp" />}
                <Button onClick={handelClick} type="submit" text = {registered ? "Sign In" : "Register"} class = "RegisterSignIn"/>
            </form>
        </div>
    )
}

export default LoginInfo;
