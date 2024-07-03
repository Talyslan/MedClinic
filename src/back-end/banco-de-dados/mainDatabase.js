import { FabricaConexoes } from "./FabricaConexoes.js";
import { MedClinicDAO } from "./DAO/databaseMedClinicDAO.js";
import { PacienteDAO } from "./DAO/pacienteDAO.js";
import { MedicoDAO } from "./DAO/medicoDAO.js";
import { TelefoneDAO } from "./DAO/telefoneDAO.js";
import { pacientes, medicos, telefones } from "./TESTEinserts.js";

export const mainDatabase = async () => {
  const fabricaConexoes = new FabricaConexoes();
  const conexao = await fabricaConexoes.open();

  // criaçao da instancia do banco
  const databaseMedClinic = new MedClinicDAO(conexao);
  // criaçao da instancia das tabelas
  const tablePaciente = new PacienteDAO(conexao);
  const tableMedico = new MedicoDAO(conexao);
  const tableTelefone = new TelefoneDAO(conexao);

  const listaTabelas = [tablePaciente, tableMedico, tableTelefone];

  try {
    // criando banco no mysql workbench e usando, respectivamente
    await databaseMedClinic.createDatabase();
    await databaseMedClinic.useDatabase();

    // criando tabelas no mysql workbench (Polimorfismo)
    for (const table of listaTabelas) {
      await table.createTable();
    }

    // TESTE: inserindo dados nas tabelas
    for (const obj of medicos) {
      await tableMedico.insertInto(obj);
    }

    for (const obj of pacientes) {
      await tablePaciente.insertInto(obj);
    }

    // for (const obj of telefones) {
    //   await tableTelefone.insertInto(obj);
    // }
  } 
  catch (err) {
    console.error("Erro ao inicializar o banco de dados | " + err.stack);
  } 
  finally {
    await fabricaConexoes.end();
  }
};

mainDatabase();
