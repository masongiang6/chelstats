import PlayerStatsTableRow from "./PlayerStatsTableRow"

export default function PlayerStatsTable(props) {

    const seasons = props.stats.map(season => {
        return <PlayerStatsTableRow position={props.position} stats={season.stat} team={season.team.name} year={season.season}/>
    })

    return (
        seasons.length !== 0 ?
        <>
            <table className="player--stats-table">
                <thead>
                    <tr>
                        <th className="player--stats-table--season-type">{props.header}</th>
                    </tr>
                </thead>
                <tbody>
                {props.position !== "Goalie" ? 
                    <tr className="player--stats-table--header">
                        <th>Season</th>
                        <th>Team</th>
                        <th>GP</th>
                        <th>G</th>
                        <th>A</th>
                        <th>P</th>
                        <th>+/-</th>
                        <th>PIM</th>
                        <th>PPG</th>
                        <th>PPP</th>
                        <th>SHG</th>
                        <th>SHP</th>
                        <th>GWG</th>
                        <th>OTG</th>
                        <th>S</th>
                        <th>S%</th>
                        <th>FO%</th>
                    </tr> :
                    <tr className="player--stats-table--header">
                        <th>Season</th>
                        <th>Team</th>
                        <th>GP</th>
                        <th>GS</th>
                        <th>W</th>
                        <th>L</th>
                        <th>T</th>
                        <th>OT</th>
                        <th>SA</th>
                        <th>GA</th>
                        <th>GAA</th>
                        <th>S</th>
                        <th>SV%</th>
                        <th>SO</th>
                        <th>MIN</th>
                    </tr>
                    }   
                    {seasons}
                </tbody>
            </table>
        </> :
        <h1 className="no-stats-message">{`Player has no stats for the ${props.header}.`}</h1>
    )
}