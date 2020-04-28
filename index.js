const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const PORT = 3333;

const imobiliarias = [];

app.get('/', (request, response) => {
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

app.listen(PORT, () => {
  console.log(`✔ Server start at port ${PORT}. ✅`)
});