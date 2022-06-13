import React from "react"
import PlayersListCategory from "./PlayersListCategory"

export default function PlayersList(props) {

    const [playersList, setPlayersList] = React.useState([])

    React.useEffect(() => {
        fetch(`https://statsapi.web.nhl.com/api/v1/teams/${props.teamId}?expand=team.roster`)
            .then(response => response.json())
            .then(data => {
                let players = data.teams[0].roster.roster
                players.sort((a, b) => (a.person.fullName > b.person.fullName) ? 1 : -1)
                setPlayersList(players)
            })
    }, [props.teamId])


    return (
        playersList.length !== 0 &&
        <div>
            <img alt="team-logo"className="players-list--logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${props.teamId}.svg`}></img>
            <PlayersListCategory header="Forwards" type="Forward" playersList={playersList}/>
            <PlayersListCategory header="Defence" type="Defenseman" playersList={playersList}/>
            <PlayersListCategory header="Goalies" type="Goalie" playersList={playersList}/>
        </div>
    )
}