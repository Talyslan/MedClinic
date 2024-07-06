// imports
import express from "express";
import { loginValidation } from "./autenticacao.funcoes.js";
// exportação
export const autenticacaoRota = express.Router();

autenticacaoRota.post("/login", loginValidation);
