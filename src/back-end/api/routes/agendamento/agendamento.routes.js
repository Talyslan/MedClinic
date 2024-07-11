import express from "express";
import { 
    getAllAgendamentos, 
    getAllAgendamentosById, 
    getMedicoOfAgendamento,
    adicionarAgendamento
} from "./agendamento.funcoes.js";

export const agendamentoRotas = express.Router();

// nao estao protegendo nada
agendamentoRotas.post('/adicionarAgendamento', adicionarAgendamento);
agendamentoRotas.get('/agendamentos', getAllAgendamentos);
agendamentoRotas.get('/agendamentos/:idPac', getAllAgendamentosById);
agendamentoRotas.get('/agendamentos/:idPac/:idMed', getMedicoOfAgendamento)