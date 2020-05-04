const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const routes = require('../routes');

const app = express();

app.use(express.json());

const PORT = 3333;

const imobiliarias = [];
const casas = [];

// ---- Middleware
// Valida se ID da imobiliaria é valido
function validateImobiliariaId(request, response, next) {
  const { id } = request.params

  if (!isUuid(id)) {
    return response.status(400).json({ error: "ID imobiliaria invalido" })
  }
  return next();
}

// Validando se ID da casa é válido
function validateCasaID(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: "ID casa invalido" })
  }
  return next();
}


app.use('/imobiliarias/:id', validateImobiliariaId);
app.use('/casas/:id', validateCasaID);
// ---- Imobiliarias

app.get('/imobiliarias', (request, response) => {
  return response.json(imobiliarias);
});

app.post('/imobiliarias', (request, response) => {
  const { nome, contato, email, telefone } = request.body;

  const imobiliaria = {
    id: uuid(),
    nome,
    contato,
    email,
    telefone
  };

  imobiliarias.push(imobiliaria);

  return response.json(imobiliaria);
})

app.put('/imobiliarias/:id', (request, response) => {
  const { id } = request.params;
  const { nome, contato, email, telefone } = request.body;

  const imobiliariafind = imobiliarias.findIndex(imobiliaria => 
    imobiliaria.id === id
  ); 
 // Valida se ID da imobiliaria existe/localizar no array
  if (imobiliariafind < 0) {
    return response.status(400).json({
      error: 'ID da imobiliaria não localizado'
    });
  } 

  const imobiliaria = {
    id,
    nome,
    contato,
    email,
    telefone
  };
 
  imobiliarias[imobiliariafind] = imobiliaria;

  return response.json(imobiliaria);
})

app.delete('/imobiliarias/:id', (request, response) => {
  const { id } = request.params;

  const imobiliariafind = imobiliarias.findIndex(imobiliaria => 
    imobiliaria.id === id
  ); 
 // Valida se ID da imobiliaria existe/localizar no array
  if (imobiliariafind < 0) {
    return response.status(400).json({
      error: 'ID da imobiliaria não localizado'
    });
  } 

  imobiliarias.splice(imobiliariafind, 1);

  return response.status(202).json({ message: `Imobiliaria apagada.` });
})

// ---- Casas
app.get('/casas', (request, response) => {
  return response.json(casas);
});

app.post('/casas', (request, response) => {
  const { endereco, inquilino, valor_aluguel } = request.body;

  const casa = {
    id: uuid(), 
    endereco,
    inquilino,
    valor_aluguel
  };

  casas.push(casa);

  return response.json(casa);
});

app.put('/casas/:id', (request, response) => {
  const { id } = request.params;
  const { endereco, inquilino, valor_aluguel } = request.body;

  const casasfind = casas.findIndex(casa => casa.id === id);

  // Validando se o ID da imobiliaria existe no array
  if (casasfind < 0) {
    return response.status(400).json({ 
      error: 'ID da casa não localizado' 
    });
  }

  const casa = {
    id,
    endereco,
    inquilino,
    valor_aluguel,
  }

  casas[casasfind] = casa;

  return response.json(casa);
});

app.delete('/casas/:id', (request, response) => {
  const { id } = request.params;

  const casasfind = casas.findIndex(casa => casa.id === id);

  // Validar se casa existe no array
  if (casasfind < 0) {
    return response.status(400).json({ 
      error: 'ID da casa não localizado' 
    });
  }

  casas.splice(casasfind, 1);

  return response.status(202).json({ message: 'Casa apagada' });
});

app.listen(PORT, () => {
  console.log(`✔ Server start at port ${PORT}. ✅`)
});