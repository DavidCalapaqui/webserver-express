const http = require('http');
const express = require('express');
/*const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hola delfo');
}).listen()*/


http.createServer((req, res) => {
    res,
    writeHead = (200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'David',
        edad: 22,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    //res.write(salida);
    //res.write('Hola delfo');
    res.end();
}).listen(8080)

console.log(`Escuchando en el puerto: ` + $(port));