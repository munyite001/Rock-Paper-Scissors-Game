import React from 'react';
import { useState } from 'react';
import Board from './Components/Board';

export default function App()
{
    const [score, setScore] = useState(0);
    const [userChoice, setUserChoice] = useState(null)
    
    function handleChoice(val)
    {
        setUserChoice(val)
    }
    console.log(userChoice)

    return(
    <div className="app">
        <div className="score-board">
            <h2>ROCK<br/>PAPER<br/>SCISSORS</h2>
            <div className="score-container">
                <h3>Score</h3>
                <span className="score">{score}</span>
            </div>
        </div>
        {userChoice == null ? <Board userChoice={handleChoice}/>: "This is a test"}
        <button className='rules'>rules</button>
    </div>
    );
}