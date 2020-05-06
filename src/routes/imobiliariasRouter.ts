import { Router } from 'express';

const { uuid, isUuid } = require('uuidv4');

const imobiliariasRoute = Router();

const imobiliarias: { 
  nome: string; 
  contato: string, 
  email: string, 
  telefone: string 
}[] = [];

imobiliariasRoute.get('/', (request, response) => {
  return response.json(imobiliarias);
});

imobiliariasRoute.post('/', (request, response) => {
  const { nome, contato, email, telefone } = request.body;

  //vefificar se imobiliaria existe/foi criada anteriormente.
  for(let i=0; i<imobiliarias.length; i++){
    if(imobiliarias[i].nome === nome) {
      return response
      .status(400)
      .json({ message: 'Imobiliaria já cadastrada' });
    }
  }

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

export default imobiliariasRoute;
