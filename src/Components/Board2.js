import React from "react";
import Disk from "./Disk";
import { disks } from "./DiskProps";
import { useState, useEffect } from "react";
import Status from "./Status";

export default function Board2(props)
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
    const computer = disks[props.compChoice]; //    0 => disks[0]

    useEffect(() => {
        determineGameStatus(user, computer, setGameStatus, props);
    }, [])

    return(
        <div className="board_2">
            <div className="choice">
                <h3>You Picked</h3>
                <div className="image-container">
                    <Disk disk={user}/>
                </div>
            </div>
            {displayComputerChoice && 
            <Status gameStats={gameStatus} playAgain={props.replay}/>}
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

function determineGameStatus(user, computer, setGameStatus, props)
{
    console.log(user.item, computer.item)
    const a = user.item.toLowerCase();
    const b = computer.item.toLowerCase();
    var x = '';
    if(a === 'rock')
    {
        if (b ==='rock')
        {
            x = 'draw';
        }
        else if(b === 'paper')
        {
            x = 'lose';
        }
        else if (b === 'scissors')
        {
            x = 'win';
        }
    }
    else if (a === 'paper')
    {
        if (b === 'rock')
        {
            x = 'win';
        }
        else if(b === 'paper')
        {
            x = 'draw';
        }
        else if (b === 'scissors')
        {
            x = 'lose';
        }
    }
    else if (a === 'scissors')
    {
        if (b === 'rock')
        {
            x = 'lose';
        }
        else if(b === 'paper')
        {
            x = 'win';
        }
        else if (b === 'scissors')
        {
            x = 'draw';
        }
    }

    setGameStatus(x);
    if (x == 'win')
    {
        setTimeout(() =>
        {
            props.setScore(props.currentScore + 1);
        }, 2200)
    }
}


