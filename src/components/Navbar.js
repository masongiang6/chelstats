import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="navbar--logo">ChelStats</Link>
            <ul>
                <Link to="/rosters" className="navbar--link">Player Stats</Link>
                <Link to="/teamstats" className="navbar--link">Team Stats</Link>
                <Link to="/standings" className="navbar--link">Standings</Link>
            </ul>
        </nav>
    )
}