const express = require('express');
let route = express.Router();

const heroesController = require ('../controllers/heroesController');

route.get('/heroes', heroesController.heroes);
route.get('/heroes/detalle/:id', heroesController.heroesDetalle);
route.get('/heroes/:id/bio/:ok?', heroesController.heroesBio)

module.exports = route