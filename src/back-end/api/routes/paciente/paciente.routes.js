// imports
import express from "express";
import {
  getAllPacientes,
  getUmPaciente,
  atualizarPaciente,
  adicionarPaciente,
  deletarPaciente,
} from "./paciente.funcoes.js";

// exportação
export const pacienteRotas = express.Router();

pacienteRotas.get("/pacientes", getAllPacientes);
pacienteRotas.get("/pacientes/:id", getUmPaciente);
pacienteRotas.post("/adicionarPaciente", adicionarPaciente);
pacienteRotas.put("/atualizarPaciente/:id", atualizarPaciente);
pacienteRotas.delete("/deletarPaciente/:id", deletarPaciente);

