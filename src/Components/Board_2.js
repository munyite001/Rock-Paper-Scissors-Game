import React from "react";
import Disk from "./Disk";
import { disks } from "./DiskProps";

export default function Board_2(props)
{
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
                    {count3 == 3 ? <Disk disk={computer} /> : '' }
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


function count3()
{
    return setTimeout(() => {return 3},1000)
}