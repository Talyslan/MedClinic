// imports
import express from "express";

import { 
    getAllLembretes, 
    getAllLembretesFromPac,
    getAllLembretesFromMed
 } from "./lembrete.funcoes.js";

// exportação
export const lembreteRotas = express.Router();

// lembreteRotas.get("/lembretes", (req, res) => {
//     res.send('to em lçembretes')
// });
lembreteRotas.get("/lembretes", getAllLembretes);
lembreteRotas.get("/lembretes/:idPac", getAllLembretesFromPac);
lembreteRotas.get("/lembretes/medico/:idMed", getAllLembretesFromMed);

