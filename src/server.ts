import 'reflect-metadata';
import express from 'express';

import routes from './routes';

import './database'; //createConnection()

const app = express();
 
app.use(express.json());
app.use(routes);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`✔ Server start at port ${PORT}. ✅`)
});