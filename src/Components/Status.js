import React from "react";


export default function Status(props)
{
    return (
        <div className="gameStatus">
            <h2>You {props.gameStats}</h2>
            <button onClick={() => handleClick(props)}>Play Again</button>
        </div>
    )
}

function handleClick(props)
{
    props.playAgain(true);
}