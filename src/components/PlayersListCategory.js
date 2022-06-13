import PlayersListRow from "./PlayersListRow"

export default function PlayersListCategory(props) {

    const players = props.playersList.filter(player => player.position.type === props.type).map(player => {
        return <PlayersListRow key={player.person.id} id={player.person.id} />
    })

    return (
        <div>
            <h1>{props.header}</h1>
            <table className="players-list">
                <tbody>
                    <tr className="players-list--header">
                        <td>NAME</td>
                        <td>AGE</td>
                        <td>HT</td>
                        <td>WT</td>
                        {props.type !== "Goalie" ? <td>SHOT</td> : <td>CATCHES</td>}
                        <td>BIRTH PLACE</td>
                        <td>BIRTHDATE</td>
                    </tr>
                    {players}
                </tbody>  
            </table>
        </div>
    )
}