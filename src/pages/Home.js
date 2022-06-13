import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-page">
            <p>The hub for NHL stats.</p>
            <div className="home-page--imglink--container">
                <div className="home-page--imglink">
                    <img alt="player" src="https://cdn.vox-cdn.com/thumbor/Mt2zOOop1kA3zeSYTi8k0MsKbwo=/0x0:2504x1669/1200x800/filters:focal(1048x195:1448x595)/cdn.vox-cdn.com/uploads/chorus_image/image/61755705/usa_today_11399431.0.jpg"/>
                    <Link to="/rosters"><h1 className="home-page--imglink--text">{"Go to Player Stats >"}</h1></Link>
                </div>
                <div className="home-page--imglink">
                    <img alt="player" src="https://www.gannett-cdn.com/presto/2022/05/25/NCOD/3c0cadd2-ed1d-4f0a-b306-2854d4e6c0e9-USATSI_18275049.jpg"/>
                    <Link to="/teamstats"><h1 className="home-page--imglink--text">{"Go to Team Stats >"}</h1></Link>
                </div>
                <div className="home-page--imglink">
                    <img alt="player" src="https://cdn.vox-cdn.com/thumbor/m-ODRaEx_T-1a9PzO6zb30tBu_M=/0x0:1983x1318/1200x800/filters:focal(834x501:1150x817)/cdn.vox-cdn.com/uploads/chorus_image/image/57822873/usa_today_10376065.0.jpg"/>
                    <Link to="/standings"><h1 className="home-page--imglink--text">{"Go to Standings >"}</h1></Link>
                </div>
            </div>
        </div>
    )
}