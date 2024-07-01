// imports
import express from "express";
import {
  getAllMedicos,
  getUmMedico,
  atualizarMedico,
  adicionarMedico,
  deletarMedico,
} from "./medico.funcoes.js";

// exportação
export const medicoRotas = express.Router();

medicoRotas.get("/medicos", getAllMedicos);
medicoRotas.get("/medicos/:id", getUmMedico);
medicoRotas.post("/adicionarMedico", adicionarMedico);
medicoRotas.put("/atualizarMedico/:id", atualizarMedico);
medicoRotas.delete("/deletarMedico/:id", deletarMedico);
