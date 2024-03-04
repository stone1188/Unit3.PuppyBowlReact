import {useLocation} from 'react-router-dom'
import { useNavigate } from "react-router"


export default function SinglePlayer() {
    
    const nav = useNavigate();
    
    const location = useLocation();
    const player = location.state.player;

    return (
        <div>
            <table>
                <thead>
            {/* <h1>All Players</h1> */}
            {
                
                <tr id="pups" >
                <td>{player.name}</td>
                <td><img src={player.imageUrl} alt="" /></td>
                <td>{player.breed}</td>
                <td><button onClick={() => nav(`/`)}>Back</button></td>
                </tr>
            }
                </thead>
            </table>
       </div>
    )
}