import React from 'react';
import { useParams } from 'react-router-dom'
import PlayerHeader from '../components/PlayerHeader';
import PlayerInfo from '../components/PlayerInfo';
import PlayerStats from '../components/PlayerStats';

export default function Player() {
    
    const {id} = useParams()
    const [playerData, setPlayerData] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}`)
            .then(response => response.json())
            .then(data => setPlayerData(data.people))
    }, [id])

    return (
        playerData.length !== 0 &&
        <div className="player-page">
            <PlayerHeader 
                id={id}
                teamId={playerData[0].currentTeam.id}
                firstName={playerData[0].firstName}
                lastName={playerData[0].lastName}
            />
            <PlayerInfo 
                number={playerData[0].primaryNumber}
                position={playerData[0].primaryPosition.name}
                height={playerData[0].height}
                weight={playerData[0].weight}
                age={playerData[0].currentAge}
                hand={playerData[0].shootsCatches}
                nationality={playerData[0].nationality}
            />
            <PlayerStats 
                id={id} 
                position={playerData[0].primaryPosition.type}
            />
        </div>
    )
}