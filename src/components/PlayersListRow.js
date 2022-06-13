import React from "react"
import "../index.css"
import PlayerImage from "./PlayerImage"
import { Link } from "react-router-dom"

export default function PlayersListRow(props) {

    const [playerData, setPlayerData] = React.useState([])

    React.useEffect(() => {
        fetch(`https://statsapi.web.nhl.com/api/v1/people/${props.id}`)
            .then(response => response.json())
            .then(data => setPlayerData(data.people))
    }, [props.id])

    return (
        playerData.length !== 0 &&
        <tr>
            <td className="players-list-row--namecol">
                <PlayerImage src={`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${props.id}.jpg`} />
                <Link to={`/player/${props.id}`}>{playerData[0].fullName}</Link>
                <span>{playerData[0].primaryNumber ? playerData[0].primaryNumber : "--"}</span>
            </td>
            <td>{playerData[0].currentAge}</td>
            <td>{playerData[0].height}</td>
            <td>{playerData[0].weight}</td>
            <td>{playerData[0].shootsCatches}</td>
            <td>{playerData[0].birthCity}, {playerData[0].birthStateProvince && `${playerData[0].birthStateProvince},`} {playerData[0].birthCountry}</td>
            <td>{playerData[0].birthDate}</td>
        </tr>
    )
}