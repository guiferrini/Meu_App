const express = require('express');
const { uuid, isUuid } = require('uuidv4');

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

app.use('/imobiliarias/:id', validateImobiliariaId);
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

app.listen(PORT, () => {
  console.log(`✔ Server start at port ${PORT}. ✅`)
});