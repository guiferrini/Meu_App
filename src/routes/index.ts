//const express = require('express');
import { Router } from 'express';

import imobiliariasRouter from './imobiliariasRouter';

const routes = Router();

// metodo use, passa p a rota independente do metodo o segundo parametro
routes.use('/imobiliarias', imobiliariasRouter);

export default routes; 
