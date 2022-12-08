
const express = require('express')
app = express()
const routes = require('./routes/routes.js')

app.use(express.urlencoded({extends: true}));

app.use(routes)

app.listen(8080, () => {
    console.log("Acessar http://localhost:8080/ping");
    console.log("Servidor Online na porta 8080");
});