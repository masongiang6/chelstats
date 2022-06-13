export default function TeamStatsDisplay(props) {
    return (
        <div className="team-stat--display">
            <h1 className="team-stat--display--name">{props.statName}</h1> 
            <h1 className="team-stat--display--value">{isNaN(props.statValue) ? props.statValue : Math.round(props.statValue * 100) / 100}</h1>
            <h1 className="team-stat--display--rank">{props.statRank}<span> in the League</span></h1>
        </div>
    )
}