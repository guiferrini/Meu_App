"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// é onde é feita a conexão com o BD
var typeorm_1 = require("typeorm");
console.log('BD is conected :)1');
typeorm_1.createConnection();
console.log('BD is conected :)2');
