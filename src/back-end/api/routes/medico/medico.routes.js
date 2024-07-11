// importa o express 
import express from "express";
// importa as funções necessárias para a criação das rotas
import {
  getAllMedicos,
  getUmMedico,
  atualizarMedico,
  adicionarMedico,
  deletarMedico,
} from "./medico.funcoes.js";

// exporta as rotas para uso
export const medicoRotas = express.Router();

// retorna todos os médicos armazenados no banco em formato JSON
medicoRotas.get("/medicos", getAllMedicos);
// retorna apenas um médico armazenado no banco em formato JSON com base no ID fornecido
medicoRotas.get("/medicos/:id", getUmMedico);
// adiciona um médico no banco
medicoRotas.post("/adicionarMedico", adicionarMedico);
// atualiza um médico no banco com base no ID fornecido
medicoRotas.put("/atualizarMedico/:id", atualizarMedico);
// deleta um médico no banco com base no ID fornecido
medicoRotas.delete("/deletarMedico/:id", deletarMedico);
