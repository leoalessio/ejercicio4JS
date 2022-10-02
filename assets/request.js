
//conectamos con API
const requestPokemon = async (id) => {
    const baseURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const query = `${id}`;
    const response = await fetch(baseURL + query)
    .then(response => response.json())
    .catch(reject=> console.error(reject))

    return response;
}