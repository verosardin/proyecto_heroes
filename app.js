// Require de Express
const express = require('express');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

//llamo a main
const routeMain = require('./routes/main');	
app.use('/', routeMain);

const routeHeroes = require('./routes/heroes');
app.use('/heroes', routeHeroes);

//app.js --> main.js --> mainController.js
//app.js --> heroes.js --> heroesController.js

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});




