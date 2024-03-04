import { useState, useEffect } from "react"
import { fetchAllPlayers} from "../API"
import { useNavigate } from "react-router"



export default function AllPlayers() {
    const [players, setPlayers] = useState([])
    const nav = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null)

useEffect(() => {
    async function getAllPlayers() {
        const APIResponse = await fetchAllPlayers();
        if (APIResponse.success) {
            setPlayers(APIResponse.data.players);
        } else {
            setError(APIResponse.error.message);
        }
    }
    getAllPlayers();
}, [])
    
   
    
    return (
        <div id="puppers">
            <table>
                <thead>
            {/* <h1>All Players</h1> */}
            {players &&
            players.map((player) =>{
                
                return <tr key={player.id} id="pups" >
                    <td>{player.name}</td>
                    <td><img src={player.imageUrl} alt="" /></td>
                    <td>{player.breed}</td>
                    <td><button onClick={() => nav(`/player/${player.id}`, {state: {player}})}>Info</button></td>
                    </tr>
                    
            })}
                </thead>
            </table>
       </div>
    )
}