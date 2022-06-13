export default function PlayerStatsTableRow(props) {

    return (
        props.position !== "Goalie" ?
        <tr>
            <td>{`${props.year.slice(0,4)}-${props.year.slice(4,8)}`}</td>
            <td>{props.team}</td>
            <td>{props.stats.games}</td>
            <td>{props.stats.goals}</td>
            <td>{props.stats.assists}</td>
            <td>{props.stats.points}</td>
            <td>{props.stats.plusMinus}</td>
            <td>{props.stats.penaltyMinutes}</td>
            <td>{props.stats.powerPlayGoals}</td>
            <td>{props.stats.powerPlayPoints}</td>
            <td>{props.stats.shortHandedGoals}</td>
            <td>{props.stats.shortHandedPoints}</td>
            <td>{props.stats.gameWinningGoals}</td>
            <td>{props.stats.overTimeGoals}</td>
            <td>{props.stats.shots}</td>
            <td>{props.stats.shotPct}</td>
            <td>{props.stats.faceOffPct}</td>
        </tr> :
        <tr>
            <td>{`${props.year.slice(0,4)}-${props.year.slice(4,8)}`}</td>
            <td>{props.team}</td>
            <td>{props.stats.games}</td>
            <td>{props.stats.gamesStarted}</td>
            <td>{props.stats.wins}</td>
            <td>{props.stats.losses}</td>
            <td>{props.stats.ties}</td>
            <td>{props.stats.ot ? props.stats.ot : "--"}</td>
            <td>{props.stats.saves}</td>
            <td>{props.stats.goalsAgainst}</td>
            <td>{Math.round(props.stats.goalAgainstAverage * 100) / 100}</td>
            <td>{props.stats.saves}</td>
            <td>{Math.round(props.stats.savePercentage * 1000) / 1000}</td>
            <td>{props.stats.shutouts}</td>
            <td>{props.stats.timeOnIce}</td>
        </tr>
    )
}