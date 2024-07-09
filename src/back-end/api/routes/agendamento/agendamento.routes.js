import express from "express";
import { getAllAgendamentos, getAllAgendamentosById } from "./agendamento.funcoes.js";

export const agendamentoRotas = express.Router();

// nao estao protegendo nada
agendamentoRotas.get('/agendamentos', getAllAgendamentos);
agendamentoRotas.get('/agendamentos/:idPac', getAllAgendamentosById);
// agendamentoRotas.get('/agendamento/:idPac/:idMed', get MedicoOfAgendamento)