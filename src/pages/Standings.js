import React from "react"
import StandingTables from "../components/StandingTables"
import StandingTypeNavigator from "../components/StandingTypeNavigator"

export default function Standings() {

    const [standingType, setStandingType] = React.useState("byDivision")
    const [standings, setStandings] = React.useState([])

    function handleClick(standingType) {
        setStandingType(standingType)
    }
    
    React.useEffect(() => {
        fetch(`https://statsapi.web.nhl.com/api/v1/standings/${standingType}`)
            .then(response => response.json())
            .then(data => {
                if(standingType === "wildCardWithLeaders"){
                    const eastern = data.records.splice(0,1)
                    const western = data.records.splice(0,1)
                    data.records.splice(2, 0, eastern[0])
                    data.records.push(western[0])
                }
                setStandings(data.records)
            }
        )
    }, [standingType])

    return (
        standings.length !== 0 &&
        <div>
            <h1 className="page--header">Standings</h1>
            <StandingTypeNavigator onClick={handleClick} standingType={standingType} />
            <StandingTables standings={standings}/>
        </div>
    )
}