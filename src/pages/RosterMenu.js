import React from "react"
import { Link } from "react-router-dom"

export default function RosterMenu() {

    const [teamsList, setTeamsList] = React.useState([])

    React.useEffect(() => {
        fetch("https://statsapi.web.nhl.com/api/v1/teams")
            .then(response => response.json())
            .then(data => {
                let teams = data.teams
                teams.sort((a, b) => (a.name > b.name) ? 1 : -1)
                setTeamsList(teams)
            })
    }, [])

    const teamLinks = teamsList.map(team => {
        return (
            <Link to={`/roster/${team.id}`} key={team.id}>
                <img alt="team-logo" className="menu--logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.id}.svg`} />
            </Link>
        )
    })

    return (
        <div>
            <h1 className="page--header">Rosters</h1>
            {teamLinks}
        </div>
    )
}