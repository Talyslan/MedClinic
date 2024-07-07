import { FabricaConexoes } from "./FabricaConexoes.js";
import { MedClinicDAO } from "./DAO/databaseMedClinicDAO.js";
// tables
import { PacienteDAO } from "./DAO/pacienteDAO.js";
import { MedicoDAO } from "./DAO/medicoDAO.js";
import { TelefoneDAO } from "./DAO/telefoneDAO.js";
import { DisponibilidadeDAO } from "./DAO/disponibilidadeDAO.js";
import { AgendamentoDAO } from "./DAO/agendamentoDAO.js";
import { PagamentoDAO } from "./DAO/pagamentoDAO.js";
import { LembreteDAO } from "./DAO/lembreteDAO.js";

// exemplos de insert lista
import {
  pacientes,
  medicos,
  telefones,
  disponibilidades,
  agendamentos,
  pagamentos,
  lembretes,
} from "./TESTEinserts.js";

const forToInsertInto = async (lista, table) => {
  for (const obj of lista) {
    // console.log("inserindo obj: ", obj)
    await table.insertInto(obj);
  }
}

const mainDatabase = async () => {
  const fabricaConexoes = new FabricaConexoes();
  const conexao = await fabricaConexoes.open();

  // criaçao da instancia do banco
  const databaseMedClinic = new MedClinicDAO(conexao);
  // criaçao da instancia das tabelas
  const tablePaciente = new PacienteDAO(conexao);
  const tableMedico = new MedicoDAO(conexao);
  const tableTelefone = new TelefoneDAO(conexao);
  const tableDisponibilidade = new DisponibilidadeDAO(conexao);
  const tableAgendamento = new AgendamentoDAO(conexao);
  const tablePagamento = new PagamentoDAO(conexao);
  const tableLembrete = new LembreteDAO(conexao);

  const listaTabelas = [
    tablePaciente,
    tableMedico,
    tableTelefone,
    tableDisponibilidade,
    tableAgendamento,
    tablePagamento,
    tableLembrete,
  ];

  try {
    // criando banco no mysql workbench e usando, respectivamente
    await databaseMedClinic.createDatabase();
    await databaseMedClinic.useDatabase();

    // criando tabelas no mysql workbench (Polimorfismo)
    for (const table of listaTabelas) {
      await table.createTable();
    }

    // TESTE: inserindo dados nas tabelas
    await forToInsertInto(pacientes, tablePaciente);
    await forToInsertInto(medicos, tableMedico);
    await forToInsertInto(telefones, tableTelefone);
    await forToInsertInto(disponibilidades, tableDisponibilidade);
    await forToInsertInto(agendamentos, tableAgendamento);
    await forToInsertInto(pagamentos, tablePagamento);
    await forToInsertInto(lembretes, tableLembrete);
  } 
  catch (err) {
    console.error("Erro ao inicializar o banco de dados | " + err.stack);
  } 
  finally {
    await fabricaConexoes.end();
  }
};

mainDatabase();

// for (const obj of medicos) {
//   await tableMedico.insertInto(obj);
// }

// for (const obj of pacientes) {
//   await tablePaciente.insertInto(obj);
// }

// for (const obj of telefones) {
//   await tableTelefone.insertInto(obj);
// }

// for (const obj of disponibilidades) {
//   await tableDisponibilidade.insertInto(obj);
// }

// for (const obj of agendamentos) {
//   await tableAgendamento.insertInto(obj);
// }

// for (const obj of pagamentos) {
//   await tablePagamento.insertInto(obj);
// }

// for (const obj of lembretes) {
//   await tableLembrete.insertInto(obj);
// }