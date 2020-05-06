"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require('express');
var express_1 = require("express");
var imobiliariasRouter_1 = __importDefault(require("./imobiliariasRouter"));
var routes = express_1.Router();
// metodo use, passa p a rota independente do metodo o segundo parametro
routes.use('/imobiliarias', imobiliariasRouter_1.default);
exports.default = routes;
