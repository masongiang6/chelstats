export default function StandingTypeNavigator(props) {

    function onClick(event){
        props.onClick(event.target.value)
    }

    return (
        <div className="standing-type-navigator">
            <button style={{borderBottom: props.standingType === "byDivision" ? "4px solid #0183DA" : "none"}} value={"byDivision"} onClick={onClick}>DIVISION</button>
            <button style={{borderBottom: props.standingType === "wildCardWithLeaders" ? "4px solid #0183DA" : "none"}} value={"wildCardWithLeaders"} onClick={onClick}>WILD CARD</button>
            <button style={{borderBottom: props.standingType === "byLeague" ? "4px solid #0183DA" : "none"}} value={"byLeague"} onClick={onClick}>LEAGUE</button>
        </div>
    )
}