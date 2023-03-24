import React from "react";
import Disk from "./Disk";
import { disks } from "./DiskProps";
import { useState, useEffect } from "react";
import Status from "./Status";

export default function Board_2(props)
{
    const [displayComputerChoice, setDisplayComputerChoice] = useState(false);
    const [gameStatus, setGameStatus] = useState(null);

    //  Anonymous funnction, that waits 3 seconds to display computer choice
    (function (){
       useEffect(() =>
       {
            setTimeout(() => {
                setDisplayComputerChoice(true);
            }, 2000);
       })
    })();

    const user = getUserChoice(props);
    const computer = disks[props.compChoice];

    console.log(user.item, computer.item)
    useEffect(() => {
        determineGameStatus(user, computer, setGameStatus);
    }, [])

    return(
        <div className="board_2">
            <div className="choice">
                <h3>You Picked</h3>
                <div className="image-container">
                    <Disk disk={user}/>
                </div>
            </div>
            {displayComputerChoice && <Status gameStats={gameStatus} playAgain={props.replay}/>}
            <div className="choice">
                <h3>The House Picked</h3>
                <div className="image-container">
                    {displayComputerChoice && <Disk disk={computer} />}
                </div>
            </div>
        </div>
);
}

function getUserChoice(props)
{
    
    for (let disk of disks)
    {
        if (disk.item === props.user)
        {
            return disk;
        }
    }
}

function determineGameStatus(user, computer, setGameStatus, setScore)
{
    console.log(user.item, computer.item)
    const a = user.item.toLowerCase();
    const b = computer.item.toLowerCase();
    if(a === 'rock')
    {
        if (b ==='rock')
        {
            setGameStatus('draw');
        }
        else if(b === 'paper')
        {
            setGameStatus('lose');
        }
        else if (b === 'scissors')
        {
            setGameStatus('win');
            setScore(() => {
                
            })
        }
    }
    else if (a === 'paper')
    {
        if (b === 'rock')
        {
            setGameStatus('win');
        }
        else if(b === 'paper')
        {
            setGameStatus('draw');
        }
        else if (b === 'scissors')
        {
            setGameStatus('lose');
        }
    }
    else if (a === 'scissors')
    {
        if (b === 'rock')
        {
            setGameStatus('lose');
        }
        else if(b === 'paper')
        {
            setGameStatus('win');
        }
        else if (b === 'scissors')
        {
            setGameStatus('draw');
        }
    }
}


