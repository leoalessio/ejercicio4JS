
const requestPokemon = async (number) => {    
   const baseURL = `https://pokeapi.co/api/v2/pokemon/`;
   const query = `${number}`;
        try {
                const response = await fetch(baseURL + query);
                // transfmoramos respuesta en Json
                const data = await response.json();
                return data;   
        } catch {
                return null;
        }

};

