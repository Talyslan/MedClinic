import express from "express";
import { JsonWebTokenFunc } from "../../autentificacao/jwt.js";

export const rotasProtegidas = express.Router();

const JsonWebToken = new JsonWebTokenFunc();

const msg = (req, res) => res.status(200).send("Esta rota está protegida")

// nao estao protegendo nada
rotasProtegidas.get('/agendamento.html', JsonWebToken.verifyJWT, msg);
rotasProtegidas.get('/painel-med-consultas.html', JsonWebToken.verifyJWT, msg);
rotasProtegidas.get('/painel-med-disponib.html', JsonWebToken.verifyJWT, msg);
rotasProtegidas.get('/painel-med-notific.html', JsonWebToken.verifyJWT, msg);
rotasProtegidas.get('/painel-pac-consultas.html', JsonWebToken.verifyJWT, msg);
rotasProtegidas.get('/painel-pac-notific.html', JsonWebToken.verifyJWT, msg);