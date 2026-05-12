const nombreSuperHeroe = document.querySelector("#nombreSuperHeroe")
const btnBuscar = document.querySelector("#botonBuscar")
const seccionHeroe = document.querySelector("#seccionHeroe")

let todosLosHeroes = []

async function cargarHeroes() {
    try {
        const res = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
        todosLosHeroes = await res.json()
        // console.log(todosLosHeroes[476].powerstats)
        // console.log(Object.entries(todosLosHeroes[476].powerstats)).map([key, value]) => `${key} - ${value}`

        // console.log(buscarHeroesPorNombre("Batman"))
    } catch (error) {
        console.error("Error al cargar los datos: ", error)
    }
}
// esta funcion no es asincrona porque ya esta cargado los heroes
function buscarHeroesPorNombre(nombre){
    return todosLosHeroes.find(heroe => heroe.name.toLowerCase() === nombre.toLowerCase()
    )
}

function mostrarHeroe(heroe){
    const listaEstadisticas = Object.entries(heroe.powerstats)
        .map(([key,value]) => `<li class="list-group-item"><span class="text-capitalize">${key}</span><span class="fw-bold">${value}</span>`
        .join("")
    seccionHeroe.innerHTML = `
    <div class="col-md-6">
    <div class="card">
        <!-- <img src="${heroe.image.lg}" class="card-img-top" alt="${heroe.name}"> -->
        <div class="card-body">
            <h5 class="card-title">${heroe.name}</h5>
            <ul>

            </ul>
        </div>
    `
}

btnBuscar.addEventListener("click", () => {
    const nombre = nombreSuperHeroe.value.trim()
    
    if(!nombre) {
        alert("Por favor escribe un nombre")
        return
    }

    const heroe = buscarHeroesPorNombre(nombre)
    // console.log(heroe)
    mostrarHeroe(heroe)
})

cargarHeroes()
// https://github.com/CesarOssesC/modulo-4-js 