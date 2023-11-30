const contenedorPokemon = document.querySelector(".pokemon-container");

function obtenerPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            crearPokemon(data);
            

        });

}

function obtenerPokemones(cantidad) {
    for (let i = 1; i <= cantidad; i++) {
        obtenerPokemon(i);
    }
}

function crearPokemon(pokemon) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("pokemon-block");

    const contenedorSprite = document.createElement("div");
    contenedorSprite.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    contenedorSprite.appendChild(sprite);

    const numero = document.createElement("p");
    numero.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const nombre = document.createElement("p");
    nombre.classList.add("name");
    nombre.textContent = pokemon.name;

    tarjeta.appendChild(contenedorSprite);
    tarjeta.appendChild(numero);
    tarjeta.appendChild(nombre);

    contenedorPokemon.appendChild(tarjeta);
}
 
obtenerPokemones(25);
const name_searched = document.getElementById("Poke_search")
const searchButton = document.getElementById("search_Button")


function BuscarPokemon(name, id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name || id}`)
        .then((res) => res.json())
        .then((data) => {  
        console.log(data)
crearPokemon(data)
       }); 

    }
  
searchButton.onclick=()=>{
    if(name_searched.value == ""){
        alert("ingresa el Nombre del Pokemon")
    }
    else{
    $("div").empty()
BuscarPokemon(name_searched.value)
    }
}

const homeBtn = document.getElementById("home_button")

homeBtn.onclick=()=>{
    $("div").empty()
    obtenerPokemones(25)
}


