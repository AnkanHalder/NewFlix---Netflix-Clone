import React from "react";
function SettingSlider(props){
    function handelChange(e){
        const value = parseFloat(e.target.value);
        if (props.sliderType == "volume") props.valueToChange.volume = value
        else if (props.sliderType == "brightness") props.valueToChange.brightness = value;
        props.setValue(props.valueToChange);
    }
    return( <div className="settingSliderContainer">
                <input type="range" onChange={handelChange} defaltValue = {props.defaultValue} 
                className="settingSlider" style={{display: (props.animState?"block":"none")}} min="0" max="1"
                 step="0.005" />

            </div>
    )
}
export default SettingSlider;