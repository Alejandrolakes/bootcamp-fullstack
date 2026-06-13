const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const puerto = 3000;

app.use(cors());
app.use(express.json());

app.get('/mascotas', (req, res) => {
  const data = fs.readFileSync('mascotas.json', 'utf-8');
  const mascotas = JSON.parse(data);

  const nombre = req.query.nombre;
  const rut = req.query.rut;

  if (nombre) {
    const mascota = mascotas.find(m => m.nombre === nombre);
    if (!mascota) {
      return res.status(404).json({ mensaje: 'Mascota no encontrada' });
    }
    return res.json(mascota);
  }

  if (rut) {
    const resultado = mascotas.filter(m => m.rut === rut);
    if (resultado.length === 0) {
      return res.status(404).json({ mensaje: 'No hay mascotas para ese rut' });
    }
    return res.json(resultado);
  }

  res.json(mascotas);
});

app.post('/mascotas', (req, res) => {
  const nombre = req.body.nombre;
  const rut = req.body.rut;

  if (!nombre || !rut) {
    return res.status(400).json({ mensaje: 'Falta nombre o rut' });
  }

  const data = fs.readFileSync('mascotas.json', 'utf-8');
  const mascotas = JSON.parse(data);

  const nuevaMascota = { nombre: nombre, rut: rut };
  mascotas.push(nuevaMascota);

  fs.writeFileSync('mascotas.json', JSON.stringify(mascotas, null, 2));

  res.json({ mensaje: 'Mascota agregada', mascota: nuevaMascota });
});

app.delete('/mascotas', (req, res) => {
  const nombre = req.query.nombre;
  const rut = req.query.rut;

  const data = fs.readFileSync('mascotas.json', 'utf-8');
  let mascotas = JSON.parse(data);

  if (nombre) {
    mascotas = mascotas.filter(m => m.nombre !== nombre);
    fs.writeFileSync('mascotas.json', JSON.stringify(mascotas, null, 2));
    return res.json({ mensaje: 'Mascota eliminada' });
  }

  if (rut) {
    mascotas = mascotas.filter(m => m.rut !== rut);
    fs.writeFileSync('mascotas.json', JSON.stringify(mascotas, null, 2));
    return res.json({ mensaje: 'Mascotas eliminadas' });
  }

  res.status(400).json({ mensaje: 'Falta nombre o rut' });
});

app.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto ' + puerto);
});
