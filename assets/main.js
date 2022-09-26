const form = document.getElementById("form");
const input = document.getElementById("input");
const btn = document.querySelector(".btn");
const card = document.getElementById("card");
const mensajeError = document.querySelector(".mensajeError")



const renderCards = (pokemon) => {
    let convertirAltura = (altura) => {
        let alturaMetro = altura / 10;
        return alturaMetro
    };
    
    let convertirPeso = (peso) => {
        let pesoKilos = peso / 10;
        return pesoKilos;
    };
    
    return `
  <img  class='img' src="${ pokemon.sprites.front_default}" alt="${pokemon.name}"></img>
  <h2 class='name'>${pokemon.name}</h2>
  <span class='altura'>Altura: ${convertirAltura(pokemon.height)} metros</span>
  <span class='peso'>Peso: ${convertirPeso(pokemon.weight)} kg</span>
  <p class='tipos'>Tipo: ${pokemon.types[0].type.name}</p>
  `
}

const obtenerPokemon = async e => {
    e.preventDefault();

    let id = input.value.trim();

    const pokemon = await requestPokemon(id);

    console.log(pokemon)

    cards.innerHTML = renderCards(pokemon);
    cards.classList.add('arreglosCard');


};

init = () => {
    form.addEventListener('submit', obtenerPokemon);

};

init();