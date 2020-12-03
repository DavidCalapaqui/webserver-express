const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



// GET  ( url, callback)
app.get('/', (req, res) => {
    // let nom = req.parameters.nombre;
    res.render('home', {
        nombre: 'Tetouuuuuuu',
    });
});

app.get('/about', (req, res) => {
    // let nom = req.parameters.nombre;
    res.render('about');
});

app.listen(port, () => {
    console.log(`ESCUCHANDO PETICIONES EN EL PUERTO ${port}`);
});