import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import RosterMenu from "./pages/RosterMenu"
import Roster from "./pages/Roster";
import Player from "./pages/Player"
import TeamStatsMenu from "./pages/TeamStatsMenu";
import TeamStats from "./pages/TeamStats";
import Standings from "./pages/Standings";


export default function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/rosters" element={<RosterMenu />} />
                        <Route path="/roster/:id" element={<Roster />} />
                        <Route path="/player/:id" element={<Player  />} />
                        <Route path="/teamstats" element={<TeamStatsMenu />} />
                        <Route path="/teamstats/:id" element={<TeamStats />} />
                        <Route path="/standings" element={<Standings />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}