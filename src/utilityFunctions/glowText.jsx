import React from 'react';

function Text(props){
    let textArray =  [];
    
    function createTextArray(letter){return (
        <span className='letter'>
        {letter} 
        </span>)}
    
    for (var i = 0; i < props.text.length; i++) {
        textArray.push(createTextArray(props.text[i]))
    }
    return (
        <div style= {{display : "flex"}} className= {"row " + props.className} > 
        {(props.heading=="1")? <h1>{textArray}</h1> : <p>{textArray}</p>}</div>
        
    )
}
export default Text;