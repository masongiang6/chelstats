import StandingTable from "./StandingTable"

export default function StandingTables(props) {

    const tables = props.standings.map(standings => {
        
        let header
        if(standings.standingsType === "byDivision") {
            header = standings.division.name
        } else if(standings.standingsType === "divisionLeaders") {
            header = standings.division.name
        } else if(standings.standingsType === "wildCard") {
            header = "Wild Card"
        } else if(standings.standingsType === "byLeague") {
            header = "National Hockey League"
        }

        return <StandingTable key={standings.teamRecords[0].team.id} header={header} standing={standings.teamRecords}/>
    })

    return (
        <div>
            {tables}
        </div>
    )
}