const http = require("http");

http.createServer((req, res) => {

    if (req.url === "/inicio" && req.method === "GET") {
        res.end("Hola mundo desde mi servidor creado con Node puro");
    }
})
.listen(3000, () => {
    console.log("Servidor iniciado en puerto 3000");
});

// este es solo con node.