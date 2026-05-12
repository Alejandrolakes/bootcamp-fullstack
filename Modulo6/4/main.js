const express = require('express')
const app = express()

app.get('/toctoc', (req, res) => {
    res.send("Quien es")
})

app.listen(3000, () => {
    console.log("servidor inicializado en http://localhost:3000")
})