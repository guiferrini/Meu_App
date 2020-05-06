import { Router } from 'express';

import { getCustomRepository } from 'typeorm';

import ImobiliariasRepository from '../repositories/ImobiliariasRepository';
import CreateImobiliariasService from '../services/CreateImobiliariasService';

const { uuid, isUuid } = require('uuidv4');

const imobiliariasRoute = Router();

imobiliariasRoute.get('/', async (request, response) => {
  const imobiliariasRepository = getCustomRepository(ImobiliariasRepository);

  const imobiliarias = await imobiliariasRepository.find();

  return response.json(imobiliarias);
});

imobiliariasRoute.post('/', async (request, response) => {  
  const { nome, contato, email, telefone } = request.body;

  const createImobiliaria = new CreateImobiliariasService();

  //vefificar se imobiliaria existe/foi criada anteriormente.
  //for(let i=0; i<imobiliarias.length; i++){
    //if(imobiliarias[i].nome === nome) {
      //return response
      //.status(400)
      //.json({ message: 'Imobiliaria já cadastrada' });
    //} 
  //}

  const imobiliaria = await createImobiliaria.execute({
    //id: uuid(),
    nome,
    contato,
    email,
    telefone
  });

  //imobiliarias.push(imobiliaria);

  return response.json(imobiliaria);
});

export default imobiliariasRoute;
