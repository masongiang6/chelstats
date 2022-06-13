import React from "react"
import PlayerStatsTable from "./PlayerStatsTable"

export default function PlayerCurrentStats(props) {

    const [playerStats, setPlayerStats] = React.useState([])
    const [playerStatsPlayoffs, setPlayerStatsPlayoffs] = React.useState([])

    React.useEffect(() => {
        fetch(`https://statsapi.web.nhl.com/api/v1/people/${props.id}/stats/?stats=yearByYear`)
            .then(response => response.json())
            .then(data => setPlayerStats(data.stats[0].splits))
        fetch(`https://statsapi.web.nhl.com/api/v1/people/${props.id}/stats/?stats=yearByYearPlayoffs`)
            .then(response => response.json())
            .then(data => setPlayerStatsPlayoffs(data.stats[0].splits))
    }, [])

    const nhlRegularSeason = playerStats.filter(season => season.league.id === 133)
    const nhlPlayoffs = playerStatsPlayoffs.filter(season => season.league.id === 133)

    return (
        (playerStats.length !== 0 && playerStatsPlayoffs.length !== 0) &&
        <div>
            <PlayerStatsTable 
                stats={nhlRegularSeason}
                position={props.position}
                header="Regular Season"   
            />
            <PlayerStatsTable 
                stats={nhlPlayoffs}
                position={props.position}
                header="Playoffs"   
            />
        </div>
    )
}