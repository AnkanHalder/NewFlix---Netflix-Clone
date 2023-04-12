import React from "react";


function Body(props){
    return (
        <div className="wrapper">
            {props.children}
        </div>
    )
}

export default Body;