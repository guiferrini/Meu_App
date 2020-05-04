const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const imobiliariasRoutee = express.Router();

const imobiliarias = [];
/*
// ---- Middleware
// Valida se ID da imobiliaria é valido
function validateImobiliariaId(request, response, next) {
  const { id } = request.params

  if (!isUuid(id)) {
    return response.status(400).json({ error: "ID imobiliaria invalido" })
  }
  return next();
}

express.use('/imobiliarias/:id', validateImobiliariaId);
*/
imobiliariasRoutee.post('/', (request, response) => {
  const { nome, contato, email, telefone } = request.body;

  //vefificar se imobiliaria existe/foi criada anteriormente.
  

  const imobiliaria = {
    id: uuid(),
    nome,
    contato,
    email,
    telefone
  };

  imobiliarias.push(imobiliaria);

  return response.json(imobiliaria);
});

module.exports = imobiliariasRoutee;
