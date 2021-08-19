console.log("script loaded");
const pokemon_count = 20
const poke_container = document.getElementById('poke-container')


// loop through the fetch data and grab the by pokemon count
const fetchPokemans = async() => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokeman(i)
    }

}
// get the pokemans from the api
const getPokeman = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    createPokemanCard(data)
}

const createPokemanCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    // html to display for each of the pokemons 
    const pokemonInnerHtml = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="" srcset="">
    </div>
    <div class="info">
        <span class="number">${pokemon.id}</span>
        <h3 class="name">${pokemon.name}</h3>
        <small class="type">Type: <span>${pokemon.types}</span></small>
    </div>
    

    `
    pokemonEl.innerHTML = pokemonInnerHtml

    poke_container.appendChild(pokemonEl)
}

fetchPokemans()