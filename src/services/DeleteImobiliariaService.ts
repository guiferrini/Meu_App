import { getCustomRepository } from 'typeorm';

import Imobiliarias from '../models/Imobiliarias';
import ImobiliariaRepository from '../repositories/ImobiliariasRepository';

class DeleteImobiliariaService {
  public async execute(id:string): Promise<void> {
    const imobiliariaRepository = getCustomRepository(ImobiliariaRepository);

    const imobiliaria = await imobiliariaRepository.findOne(id);
    console.log(imobiliaria);
    
    if(!imobiliaria) {
      throw new Error('Imobiliaria não localizada, favor verificar ID informado');
    }

    await imobiliariaRepository.remove(imobiliaria);
  }
}

export default DeleteImobiliariaService;