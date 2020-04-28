const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3333;

const imobiliarias = [];

app.get('/', (request, response) => {
  return response.json(imobiliarias);
});

app.post('/imobiliarias', (request, response) => {
  const imobiliaria = request.body;

  
})

app.listen(PORT, () => {
  console.log(`✔ Server start at port ${PORT}. ✅`)
});