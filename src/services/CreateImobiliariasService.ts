import { getCustomRepository } from 'typeorm';

import ImobiliariasRepository from '../repositories/ImobiliariasRepository';

import Imobiliaria from '../models/Imobiliarias';

interface Request {
  nome: string;
  contato: string;
  email: string;
  telefone: string;
}

class CreateImobiliariaService {
  public async execute({
    nome, contato, email, telefone
  }: Request): Promise<Imobiliaria> {
    const imobiliariasRepository = getCustomRepository(ImobiliariasRepository);

    const imobiliaria = imobiliariasRepository.create({
      nome, contato, email, telefone
    });

    await imobiliariasRepository.save(imobiliaria);

    return imobiliaria;
  }
}

export default CreateImobiliariaService;