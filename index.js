const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const PORT = 3333;

const imobiliarias = [];

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

  return response.json(imobiliarias);
})

app.put('/imobiliarias/:id', (request, response) => {
  const { id } = request.params;
  const { nome, contato, email, telefone } = request.body;

  const imobiliariafind = imobiliarias.find(imobiliaria => 
    imobiliaria.id === id
  );

  if (!imobiliariafind) {
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

app.listen(PORT, () => {
  console.log(`✔ Server start at port ${PORT}. ✅`)
});