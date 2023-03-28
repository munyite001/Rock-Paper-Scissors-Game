import React from 'react';
import { useState } from 'react';
import Board from './Components/Board';
import Modal from './Components/Modal';
import Board2 from './Components/Board2';
import ScoreBoard from './Components/ScoreBoard';
import { disks } from './Components/DiskProps';

export default function App()
{
    let s = localStorage.getItem('score') == undefined ? 0 : +localStorage.getItem('score');
    const [score, setScore] = useState(s);
    const [userChoice, setUserChoice] = useState(null)
    const [modal, setModal] = useState(false);
    const [playAgain, setPlayAgain] = useState(false);

    let computer = disks[Math.floor(Math.random() *3)];
    console.log("Computer Choice: " + computer);
    console.log(`Score: ${score}`);

    /* eslint-disable */
    function resetGame()
    {
        setUserChoice(null);
        setPlayAgain(false);
        // computerChoice = Math.floor(Math.random() *3 );
    }
    /* eslint-enable */

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
        <ScoreBoard score={score}/>
        {userChoice == null || playAgain ? 
            <Board userChoice={handleChoice}
            replayStatus={playAgain}
            reset={resetGame}
            /> : 
            <Board2 user={userChoice} 
            replay={setPlayAgain}
            replayStatus={playAgain}
            computerChoice={computer}
            currentScore={score}
            setScore={setScore}
            />}
        <button className='rules-btn' onClick={togleModal}>rules</button>
    </div>
    );
}

