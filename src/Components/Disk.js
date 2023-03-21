import React from "react";


export default function Disk(props)
{
    return (
    <div className="disk-outer" 
    style={{
        background: props.disk.gradient, 
        boxShadow: props.disk.shadow,
        }}>
        <div className="disk-inner">
            <img className="choice-icon" 
            src={props.disk.image} 
            alt="Choice"
            onClick={() => handleClick(props)}
            />
        </div>
    </div>);
}


function handleClick(props)
{
    const choice = setTimeout(props.setChoice, 500, props.disk.item)
}