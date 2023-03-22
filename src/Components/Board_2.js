import React from "react";
import Disk from "./Disk";
import { disks } from "./DiskProps";
import { useState, useEffect } from "react";


export default function Board_2(props)
{
    const [displayComputerChoice, setDisplayComputerChoice] = useState(false);

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
    const computer = disks[Math.floor(Math.random() * 3)];
    return(
        <div className="board_2">
            <div className="choice">
                <h3>You Picked</h3>
                <div className="image-container">
                    <Disk disk={user}/>
                </div>
            </div>
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


