const express = require('express');

let route = express.Router();

const mainController = require('../controllers/mainController')
route.get('/creditos', mainController.creditos);

route.get('/', mainController.index)

module.exports = route