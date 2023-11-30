const contenedorPokemon = document.querySelector(".pokemon-container")
const spinner = document.querySelector("#spinner"); 
const previous = document.querySelector("#previous"); 
const next = document.querySelector("#next"); 


let offset = 1;
let limit = 8;

previous.addEventListener("click", () => {
    if (offset != 1) {
       offset -= 9;
       removeChildNodes(contenedorPokemon);
    obtenerPokemones(offset, limit); 
    }
    });

next.addEventListener("click", () => {
    offset += 9;
    removeChildNodes(contenedorPokemon);
    obtenerPokemones(offset, limit);
});

function obtenerPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            crearPokemon(data);
            

=======
            spinner.style.display = "none"; 
        });

}

function obtenerPokemones(offset, limit) {
    spinner.style.display = "block";
    for (let i = offset; i <= offset + limit; i++) {
        obtenerPokemon(i);
    }
}

function crearPokemon(pokemon) {
    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");

    const contendorTarjeta = document.createElement("div");
    contendorTarjeta.classList.add("card-container");

    flipCard.appendChild(contendorTarjeta);

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

   
    const cardBack = document.createElement("div");
    cardBack.classList.add("pokemon-block-back");

    cardBack.appendChild(barraProgreso(pokemon.stats));

    contendorTarjeta.appendChild(tarjeta);
    contendorTarjeta.appendChild(cardBack);
    contenedorPokemon.appendChild(flipCard);
}


function barraProgreso(stats) {
    const statsContainer = document.createElement("div");
    statsContainer.classList.add("stats-container");

    for (let i = 0; i < 3; i++){
        const stat = stats[i];

        const statPercent = stat.base_state / 2 + "%";
        const statContainer = document.createElement("stat-container");
        statContainer.classList.add("stat-container");

        const statName = document.createElement("div");
        statName.textContent = stat.stat.name;


        const progreso = document.createElement("div");
        progreso.classList.add("progreso");

        const barraProgreso = document.createElement("div");
        barraProgreso.classList.add("barra-progreso");
        barraProgreso.setAttribute("aria-valuenow", stat.base_stat);
        barraProgreso.setAttribute("aria-valuemin", 0);
        barraProgreso.setAttribute("aria-valuemax", 200);
        barraProgreso.style.width = statPercent;

        barraProgreso.textContent = stat.base_stat;

        progreso.appendChild(barraProgreso);
        statContainer.appendChild(statName);
        statContainer.appendChild(progreso);

        statsContainer.appendChild(statContainer);

    }

    return statsContainer;
}
 
obtenerPokemones(25);
const name_searched = document.getElementById("Poke_search")
const searchButton = document.getElementById("search_Button")
=======


function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


obtenerPokemones(offset, limit);


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


