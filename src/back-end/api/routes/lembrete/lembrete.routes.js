// imports
import express from "express";
import {
    getAllLembretesFromPac
} from "./lembrete.funcoes.js";

// exportação
export const pacienteRotas = express.Router();

pacienteRotas.get("/lembretesByPac", getAllLembretesFromPac);
pacienteRotas.post()


