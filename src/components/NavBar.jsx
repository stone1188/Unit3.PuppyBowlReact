import { Routes, Route, Link } from "react-router-dom";
import AllPlayers from './AllPlayers'
import SinglePlayer from './SinglePlayer'
import NewPlayerForm from "./NewPlayerForm";
export default function NavBar() {
  
    return (
        <>
        

         <div id='container'>
            <h1>hello</h1>
            <Link to="/">All Players</Link>
            <Link to="/addplayer">Add Player</Link>
            <Link to="/player/id">Single Player</Link>
        </div>

        <div id="main-section">
            <Routes>
                <Route path='/' element={<AllPlayers/>} />
                <Route path='/addplayer' element={<NewPlayerForm/>} />
                <Route path={`/player/:id`} element={<SinglePlayer/>} />
            </Routes>
        </div>
        </>
    )

}

  
