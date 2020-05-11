import { EntityRepository, Repository, getRepository } from 'typeorm';

import Imobiliaria from '../models/Imobiliarias';

@EntityRepository(Imobiliaria)
class ImobiliariasRepository extends Repository<Imobiliaria> {}

/*  public async verificarExistencia(nome: string): Promise<Imobiliaria | null> {
    const imo = getRepository(Imobiliaria);

    const imobiliarias = await imo.findOne({
      where: { nome },
    });

    return imobiliarias || null;
}

export default ImobiliariasRepository;

const ImobiliariasRepository = getRepository(Imobiliaria);
const check = ImobiliariasRepository.findOne(name);

if(check) {
  throw Error('Imobiliaria já cadastrada')*/

export default ImobiliariasRepository;