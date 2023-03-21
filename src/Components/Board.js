import React, { usestate } from "react";
import Disk from "./Disk";
import paper from '../Images/icon-paper.svg';
import rock from '../Images/icon-rock.svg';
import scissors from '../Images/icon-scissors.svg';

export default function Board()
{
    const disks = 
    [
        {
            image: paper,
            gradient: 'linear-gradient(45deg, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
            shadow: '0px 2px 1px hsl(230, 89%, 62%)',
        },
        {
            image: rock,
            gradient: 'linear-gradient(45deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
            shadow: '0px 2px 1px hsl(349, 71%, 52%)',
            

        },
        {
            image: scissors,
            gradient: 'linear-gradient(45deg,hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
            shadow: '0px 2px 1px hsl(39, 89%, 49%)',
        },
        
    ]
    return (
        <div className="board">
            <Disk disk={disks[0]}/>
            <Disk disk={disks[1]}/>
            <Disk disk={disks[2]}/>
        </div>
    );
}