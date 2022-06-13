import React from "react"

export default function PlayerInfo(props) {

    return (
        <div className="player-info">
            {props.number &&
            <span>{`#${props.number}`}</span>}
            <span>{props.position}</span>
            <span>{props.height}</span>
            <span>{props.weight}lbs</span>
            <span>{`Shoots: ${props.hand}`}</span>
            <span>Age: {props.age}</span>
            <span className="player-info--last">{`Nationality: ${props.nationality}`}</span>
        </div>
    )
}