import { useParams } from 'react-router-dom'
import React from "react"
import TeamStatsDisplay from '../components/TeamStatsDisplay'

export default function TeamStats() {

    const {id} = useParams()
    const [teamStats, setTeamStats] = React.useState([])
    const [teamStatsRank, setTeamStatsRank] = React.useState([])

    const statNames = ["Wins", "Losses", "Overtime Losses", "Points", "Points Percentage", "Goals Per Game",
                       "Goals Against Per Game", "Powerplay Percentage", "Powerplay Goals", "Powerplay Goals Against",
                       "Powerplay Opportunities", "Penalty Kill Percentage", "Shots Per Game", "Shots Allowed Per Game",
                       "Faceoff Percentage", "Shooting Percentage", "Save Percentage"]

    console.log(teamStats)

    React.useEffect(() => {
        fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}/stats`)
            .then(response => response.json())
            .then(data => {
                let stats = Object.values(data.stats[0].splits[0].stat)
                stats.splice(0,1)
                stats.splice(7,1)
                stats.splice(14,6)
                stats.splice(14,3)
                setTeamStats(stats)
                let statsRank = Object.values(data.stats[1].splits[0].stat)
                statsRank.splice(12,1)
                statsRank.splice(7,1)
                statsRank.splice(14,6)
                statsRank.splice(14,3)
                setTeamStatsRank(statsRank)
            })
    }, [id])

    const teams = statNames.map((statName, index) => {
        return (
            <TeamStatsDisplay 
                id={id}
                statName={statName}
                statValue={teamStats[index]}
                statRank={teamStatsRank[index]}
            />
        )
    })

    return (
        <div>
            <img alt="team-logo"className="players-list--logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${id}.svg`}></img>
            <div className="team-stat--display--container">
                {teams}
            </div>
        </div>
    )
}