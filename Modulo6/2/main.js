const express = require('express')
const app = express()

app.get("/inicio", (req, res) => {
    res.send("Hola mundo desde mi servidor creado con EXPRESS")
})

app.listen(3000, () =>{
    console.log("El servidor ha sido inicializado en el puerto 3000")
})