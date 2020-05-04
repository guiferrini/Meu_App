const express = require('express');

const routes = express.Router();

const imobiliariasRouter = require('./imobiliariasRouter');

// metodo use, passa p a rota independente do metodo o segundo parametro
routes.use('/imobiliarias', imobiliariasRouter);

module.exports = routes;
