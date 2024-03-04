

export async function fetchAllPlayers() {
    try {
        const response = await 
            fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2311-FSA-ET-WEB-PT-SF/players`);
        const result = await response.json();
        
        
        return result;
    } catch (err) {
        console.error(err)
    }
}



export async function addPlayer(player) {
    
    try {
        const response = await
            fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2311-FSA-ET-WEB-PT-SF/players`, {
                method: 'POST',
                headers: { 'Content-Type': 'Application/json'},
                body: JSON.stringify(player),
                
            });

        if(!response.ok){
            throw new Error("Try adding new player again");
        }

    } catch (error) {
        console.error(error)
    }
} 