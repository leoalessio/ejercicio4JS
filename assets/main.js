const form = document.getElementById("form");
const input = document.getElementById("input");
const btn = document.querySelector(".btn");
const card = document.getElementById("card");

// mensaje de error input vacío
const errorVacio = () => {
  card.innerHTML= `
  <div class="error__container>
  <h2 class="error"> Por favor ingrese un número</h2>
  </div>
  `;
}

const renderResult = async (pokemon) => {
  const newPokemon = await pokemon;
  if (!newPokemon){
    card.innerHTML = `
    <div class="error__container>
    <h2 class="error"> No encontramos ese pokemón, por favor ingrese nuevamente un número</h2>
    </div>
    `
  } else {
    card.innerHTML = renderPK(newPokemon);
  }
}
//renderizamos
const renderPK = (pokemon) => {
  const {name, sprites, height, weight, types} = pokemon;
  return `
  <div class="poke__card"> 
    <img src="${sprites.other.dream_world.front_default}" class="pk__img">
    <h2>${name.toUpperCase()}</h2>
    <p class="tipo__pk"> Tipos: ${types.map(tipo => {
      return `<span> ${tipo.type.name.toUpperCase()} </span>`
    })
    .join("")} </p>

    <p class="altura"> Altura: ${height / 10} metros</p>
    <p class="peso"> Peso: ${weight / 10} kg</p>
    </div>
  `
}

//funcion para buscar Pokemon
const buscarPk = async e => {
  e.preventDefault();
  // capturamos el valor del input
  const searchedValue = input.value.trim();
  if (!searchedValue) {
    errorVacio();
    return;
  }
  const searchedPK = requestPokemon(Number(searchedValue))
  renderResult(searchedPK);
  form.reset();
};

// funcion para llamar todo
const init = () => {
  form.addEventListener("submit", buscarPk);
};

init();
