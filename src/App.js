import React from 'react';
import { useState } from 'react';
import Board from './Components/Board';
import Modal from './Components/Modal';
import Board_2 from './Components/Board_2';

export default function App()
{
    const [score, setScore] = useState(0);
    const [userChoice, setUserChoice] = useState(null)
    const [modal, setModal] = useState(false);

    function togleModal()
    {
        setModal(!modal)
    }

    function handleChoice(val)
    {
        setUserChoice(val)
    }
    console.log(userChoice)

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
        {userChoice == null ? <Board userChoice={handleChoice}/>: <Board_2 user={userChoice}/>}
        <button className='rules-btn' onClick={togleModal}>rules</button>
    </div>
    );
}

