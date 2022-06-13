import PlayersList from "../components/PlayersList"
import { useParams } from 'react-router-dom'

export default function Roster() {

    const {id} = useParams()

    return (
        <div>
            <PlayersList teamId={id}/>
        </div>
    )
}