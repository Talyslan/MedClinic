// imports
import express from "express";
import { getAllLembretesFromPac } from "./lembrete.funcoes.js";

// exportação
export const lembreteRotas = express.Router();

lembreteRotas.get("/lembretes/:idPac", getAllLembretesFromPac);

