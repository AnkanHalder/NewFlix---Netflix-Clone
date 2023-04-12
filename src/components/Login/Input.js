import React from "react";



function Input(props){
    return (
        <div className={"input_wrap " + props.class}>
            <input type={props.type} 
            style = {{borderColor : props.style}} // To alert wrong input eg. Wrong Password
            value = {props.value}
            onChange={props.OnChange}
            pattern={props.pattern} name ={props.name} 
            placeholder={props.placeholder} />
        </div>
    )
}

export default Input;