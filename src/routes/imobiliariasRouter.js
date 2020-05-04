const express = require('express');

const imobiliariasRoutee = express.Router();



imobiliariasRoutee.post('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

module.exports = imobiliariasRoutee;
