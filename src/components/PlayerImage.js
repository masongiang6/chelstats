import React from "react"

export default function PlayersImage(props) {

    const [exists, setExists] = React.useState(false)

    React.useEffect(() => {
        var request = new XMLHttpRequest();
        request.open("GET", props.src, true);

        request.send();
        request.onload = status => {
            if (request.status === 200) {
                setExists(true)
            }
        }
    }, [props.src])

    return(
        exists ? <img alt="player" src={props.src} /> : <img alt="player" src="https://cms.nhl.bamgrid.com/images/headshots/current/168x168/skater.jpg" />
    )
}