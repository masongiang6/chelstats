import React from "react"
import PlayerImage from "./PlayerImage"

export default function PlayerHeader(props) {

    return (
       <div className="player-header">
           <PlayerImage src={`https://nhl.bamcontent.com/images/headshots/current/168x168/${props.id}.jpg`} />  
           <div className="player-header--name">
                <h2>{props.firstName}</h2>
                <h1>{props.lastName}</h1>
           </div>
            <img className="player-header--logo" alt="player" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${props.teamId}.svg`}></img>
        </div>
    )
}