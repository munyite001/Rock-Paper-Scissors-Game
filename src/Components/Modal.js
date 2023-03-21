import React from "react";

export default function Modal(props)
{
    return(
        <div className="modal" onClick={() => handleClick(props)}>
            <div className="rules-container">
                <h2>Rules</h2>
                <div className="rules-image">
                    <img src={require('../Images/image-rules.svg')} alt="Rules" />
                </div>
                <div className="close-modal" onClick={() => handleClick(props)}>
                    <img src={require('../Images/icon-close.svg')} alt="" />
                </div>
            </div>
        </div>
    );
}

function handleClick(props)
{
    props.setModal();
}