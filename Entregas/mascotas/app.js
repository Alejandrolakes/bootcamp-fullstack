const url = 'http://localhost:3000/mascotas';

function mostrarMensaje(texto) {
  document.getElementById('mensaje').innerText = texto;
}

function listarMascotas() {
  axios.get(url)
    .then(function (respuesta) {
      const lista = document.getElementById('lista');
      lista.innerHTML = '';

      respuesta.data.forEach(function (m) {
        const item = document.createElement('li');
        item.innerText = m.nombre + ' - ' + m.rut;
        lista.appendChild(item);
      });
    })
    .catch(function (error) {
      mostrarMensaje('Error al listar mascotas');
      console.log(error);
    });
}

function agregarMascota() {
  const nombre = document.getElementById('nombre').value;
  const rut = document.getElementById('rut').value;

  if (nombre === '' || rut === '') {
    mostrarMensaje('Debes ingresar nombre y rut');
    return;
  }

  axios.post(url, { nombre: nombre, rut: rut })
    .then(function (respuesta) {
      mostrarMensaje(respuesta.data.mensaje);
      document.getElementById('nombre').value = '';
      document.getElementById('rut').value = '';
      listarMascotas();
    })
    .catch(function (error) {
      mostrarMensaje('Error al agregar mascota');
      console.log(error);
    });
}

function buscarPorNombre() {
  const nombre = document.getElementById('buscarNombre').value;

  axios.get(url + '?nombre=' + nombre)
    .then(function (respuesta) {
      mostrarMensaje(JSON.stringify(respuesta.data));
    })
    .catch(function (error) {
      mostrarMensaje('No se encontro la mascota');
      console.log(error);
    });
}

function buscarPorRut() {
  const rut = document.getElementById('buscarRut').value;

  axios.get(url + '?rut=' + rut)
    .then(function (respuesta) {
      mostrarMensaje(JSON.stringify(respuesta.data));
    })
    .catch(function (error) {
      mostrarMensaje('No se encontraron mascotas para ese rut');
      console.log(error);
    });
}

function eliminarPorNombre() {
  const nombre = document.getElementById('eliminarNombre').value;

  axios.delete(url + '?nombre=' + nombre)
    .then(function (respuesta) {
      mostrarMensaje(respuesta.data.mensaje);
      listarMascotas();
    })
    .catch(function (error) {
      mostrarMensaje('Error al eliminar mascota');
      console.log(error);
    });
}

function eliminarPorRut() {
  const rut = document.getElementById('eliminarRut').value;

  axios.delete(url + '?rut=' + rut)
    .then(function (respuesta) {
      mostrarMensaje(respuesta.data.mensaje);
      listarMascotas();
    })
    .catch(function (error) {
      mostrarMensaje('Error al eliminar mascotas');
      console.log(error);
    });
}

listarMascotas();
