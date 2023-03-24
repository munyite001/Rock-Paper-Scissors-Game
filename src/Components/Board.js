import React from "react";
import Disk from "./Disk";
import { disks } from "./DiskProps";

export default function Board(props)
{
    if (props.replayStatus)
    {
        props.reset();
    }
    return (
        <div className="board">
            <Disk disk={disks[0]} setChoice={props.userChoice}/>
            <Disk disk={disks[1]} setChoice={props.userChoice}/>
            <Disk disk={disks[2]} setChoice={props.userChoice}/>
        </div>
    );
}

function resetGame(props)
{
    props.setPlay(false);
    props.resetUser(null);
}