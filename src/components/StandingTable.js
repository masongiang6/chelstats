export default function StandingTable(props) {

    console.log(props.standing)

    let place = 1

    const teams = props.standing.map(team => {
        return (
            <tr>
                <td>
                    <div className="standings-table--teamdisplay">
                        <span>{place++}</span>
                        <img alt="teamlogo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.team.id}.svg`} />
                        <h1>{team.team.name}</h1>
                    </div>
                </td>
                <td>{team.gamesPlayed}</td>
                <td>{team.leagueRecord.wins}</td>
                <td>{team.leagueRecord.losses}</td>
                <td>{team.leagueRecord.ot}</td>
                <td>{team.points}</td>
                <td>{Math.round(team.pointsPercentage * 1000) / 1000}</td>
                <td>{team.regulationWins}</td>
                <td>{team.row}</td>
                <td>{team.goalsScored}</td>
                <td>{team.goalsAgainst}</td>
                <td>{team.goalsScored - team.goalsAgainst}</td>
                <td>{team.streak.streakCode}</td>
            </tr>
        )
    })

    return (
        <table className="standings-table">
            <tbody>
                <tr className="standings-table--header">
                    <td>{props.header}</td>
                    <td>GP</td>
                    <td>W</td>
                    <td>L</td>
                    <td>OT</td>
                    <td>PTS</td>
                    <td>P%</td>
                    <td>RW</td>
                    <td>ROW</td>
                    <td>GF</td>
                    <td>GA</td>
                    <td>DIFF</td>
                    <td>STRK</td>
                </tr>
                {teams}
            </tbody>
        </table>
    )
}