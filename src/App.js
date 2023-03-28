import React from 'react';
import { useState } from 'react';
import Board from './Components/Board';
import Modal from './Components/Modal';
import Board2 from './Components/Board2';

export default function App()
{
    const [score, setScore] = useState(0);
    const [userChoice, setUserChoice] = useState(null)
    const [modal, setModal] = useState(false);
    const [playAgain, setPlayAgain] = useState(false);


    console.log(`Score: ${score}`);
    let computerChoice = Math.floor(Math.random() *3);
    
    function resetGame()
    {
        setUserChoice(null);
        setPlayAgain(false);
        computerChoice = Math.floor(Math.random() *3 );
    }

    function togleModal()
    {
        setModal(!modal)
    }

    function handleChoice(val)
    {
        setUserChoice(val)
    }

    return(
    <div className="app">
        {modal && (<Modal setModal={togleModal}/>)}
        <div className="score-board">
            <h2>ROCK<br/>PAPER<br/>SCISSORS</h2>
            <div className="score-container">
                <h3>Score</h3>
                <span className="score">{score}</span>
            </div>
        </div>
        {userChoice == null || playAgain ? 
            <Board userChoice={handleChoice}
            replayStatus={playAgain}
            reset={resetGame}
            /> : 
            <Board2 user={userChoice} 
            replay={setPlayAgain}
            replayStatus={playAgain}
            compChoice={computerChoice}
            currentScore={score}
            setScore={setScore}
            />}
        <button className='rules-btn' onClick={togleModal}>rules</button>
    </div>
    );
}

