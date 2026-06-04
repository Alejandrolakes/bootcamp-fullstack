// Variable global para guardar los datos
let personajesCache = null; 

// Función principal que llama a la API (solo la primera vez)
async function obtenerDatos() {
    if (personajesCache) {
        // Si ya tenemos datos, no llamamos a la API
        document.getElementById('cache-msg').style.display = 'block';
        return personajesCache;
    }

    // Primera vez: llamamos a la API
    document.getElementById('cache-msg').style.display = 'none';
    const respuesta = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10');
    const datos = await respuesta.json();

    // Guardamos en cache
    personajesCache = datos;
    console.log('Datos obtenidos de la API:', datos);

    return datos;
    }

    // Botón 1: Mostrar lista de personajes
    async function obtenerPersonajes() {
    const personajes = await obtenerDatos();
    const contenido = document.getElementById('contenido');

    let html = '<div class="lista-personajes">';

    personajes.forEach(function(p) {
        html += `
        <div class="card">
            <img src="${p.image}" alt="${p.name}" />
            <p class="nombre">${p.name}</p>
            <p>ID: ${p.id}</p>
            <p>Especie: ${p.species}</p>
        </div>
        `;
    });

    html += '</div>';
    contenido.innerHTML = html;
    }

    // Boton 2: Agrupar por especie
    async function agruparPorEspecie() {
    const personajes = await obtenerDatos();
    const contenido = document.getElementById('contenido');

    // Agrupar con reduce
    const grupos = personajes.reduce(function(acumulador, personaje) {
        const especie = personaje.species;

        if (!acumulador[especie]) {
        acumulador[especie] = [];
        }

        acumulador[especie].push(personaje);
        return acumulador;
    }, {});

    // Ordenar especies por orden alfabetico
    const especiesOrdenadas = Object.keys(grupos).sort();

    let html = '';

    especiesOrdenadas.forEach(function(especie) {
        html += `<div class="grupo"><h3>${especie}</h3><ul>`;

        grupos[especie].forEach(function(p) {
        html += `<li>- ${p.name} (ID: ${p.id})</li>`;
        });

        html += '</ul></div>';
    });

    contenido.innerHTML = html;
    }

    // Boton 3: Ficha individual de cada uno
    async function mostrarFicha(id) {
    const personajes = await obtenerDatos();

    // Buscar el personaje por ID
    const p = personajes.find(function(personaje) {
        return personaje.id === id;
    });

    const contenido = document.getElementById('contenido');

    contenido.innerHTML = `
        <div class="ficha">
        <img src="${p.image}" alt="${p.name}" />
        <div class="ficha-info">
            <p>ID: <span>${p.id}</span></p>
            <p>Nombre: <span>${p.name}</span></p>
            <p>Especie: <span>${p.species}</span></p>
            <p>Estado: <span>${p.status}</span></p>
            <p>Género: <span>${p.gender}</span></p>
            <p>Origen: <span>${p.origin.name}</span></p>
        </div>
        </div>
    `;
    }