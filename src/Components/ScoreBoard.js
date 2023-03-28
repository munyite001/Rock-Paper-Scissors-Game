import React from "react";

export default function ScoreBoard(props)
{
    return(
        <div className="score-board">
            <h2>ROCK<br/>PAPER<br/>SCISSORS</h2>
            <div className="score-container">
                <h3>Score</h3>
                <span className="score">{props.score}</span>
            </div>
        </div>
    );
}