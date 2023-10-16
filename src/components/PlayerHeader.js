import React from "react"
import PlayerImage from "./PlayerImage"
import {abbreviations} from '../utility/abbreviations.js'

export default function PlayerHeader(props) {

    return (
       <div className="player-header">
           <PlayerImage src={`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${props.id}.jpg`} />  
           <div className="player-header--name">
                <h2>{props.firstName}</h2>
                <h1>{props.lastName}</h1>
           </div>
            <img className="player-header--logo" alt="player" src={`https://assets.nhle.com/logos/nhl/svg/${abbreviations.get(Number(props.teamId))}_light.svg`}></img>
        </div>
    )
}