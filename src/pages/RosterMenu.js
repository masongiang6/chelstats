import React from "react"
import { Link } from "react-router-dom"
import {abbreviations} from '../utility/abbreviations'

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
                <img alt="team-logo" className="menu--logo" src={`https://assets.nhle.com/logos/nhl/svg/${abbreviations.get(team.id)}_light.svg`} />
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