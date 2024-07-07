// imports
import express from "express";
import {
    getSenhaPessoa
} from "./pessoa.funcoes.js";

// exportação
export const pessoaRotas = express.Router();

pacienteRotas.get("/senhaByEmail/:email", getSenhaPessoa);



