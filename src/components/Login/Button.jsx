import React from "react";

function Button(props){
    return(
        <div className={"input_wrap " + props.class }>
            <button type = {props.type} onClick = {props.onClick} >{props.text}</button>
        </div>
    )
}

export default Button;