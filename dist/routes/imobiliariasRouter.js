"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var _a = require('uuidv4'), uuid = _a.uuid, isUuid = _a.isUuid;
var imobiliariasRoute = express_1.Router();
var imobiliarias = [];
imobiliariasRoute.get('/', function (request, response) {
    return response.json(imobiliarias);
});
imobiliariasRoute.post('/', function (request, response) {
    var _a = request.body, nome = _a.nome, contato = _a.contato, email = _a.email, telefone = _a.telefone;
    //vefificar se imobiliaria existe/foi criada anteriormente.
    for (var i = 0; i < imobiliarias.length; i++) {
        if (imobiliarias[i].nome === nome) {
            return response
                .status(400)
                .json({ message: 'Imobiliaria já cadastrada' });
        }
    }
    var imobiliaria = {
        id: uuid(),
        nome: nome,
        contato: contato,
        email: email,
        telefone: telefone
    };
    imobiliarias.push(imobiliaria);
    return response.json(imobiliaria);
});
exports.default = imobiliariasRoute;
