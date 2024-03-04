import { useState } from "react";
import { addPlayer } from "../API"

export default function NewPlayerForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        
        // const form = e.target;
        // const formData = new FormData(form);

        // const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson);
        const player = {name,breed};
        addPlayer(player);
    }

    
    return (
        <div id="handle">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" > Name:
                    <input 
                    type="text" 
                    htmlFor="name"
                     id="name"
                     value = {name}
                     onChange={(e) => {
                        setName(e.target.value)
                     }}
                     />
                </label>
                <label htmlFor="breed" > Breed:
                    <input 
                    type="text" 
                    htmlFor="breed" 
                    id="breed"
                    value = {breed}
                     onChange={(e) => {
                        setBreed(e.target.value)
                     }}
                    />
                </label>
                
                <button>Submit</button>
                
                
            </form>
        </div>
    )
}