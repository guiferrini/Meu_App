import { EntityRepository, Repository } from 'typeorm';

import Imobiliaria from '../models/Imobiliarias';

@EntityRepository(Imobiliaria)
class ImobiliariasRepository extends Repository<Imobiliaria> {

}

export default ImobiliariasRepository;