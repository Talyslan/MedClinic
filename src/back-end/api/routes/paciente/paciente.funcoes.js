// imports
import { FabricaConexoes } from "../../../banco-de-dados/FabricaConexoes.js";
import { MedClinicDAO } from "../../../banco-de-dados/DAO/databaseMedClinicDAO.js";
import { PacienteDAO } from "../../../banco-de-dados/DAO/pacienteDAO.js";

const fabricaConexoes = new FabricaConexoes();

// Devolver todos os pacientes
export const getAllPacientes = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tablePaciente = new PacienteDAO(conexao);

  try {
    await databaseMedClinic.useDatabase();
    const result = await tablePaciente.getAllPacientesOnDB()
    res.status(201).send(result);
  } 
  catch (err) {
    res.status(500).send("Erro ao acessar pacientes!");
  }

  await fabricaConexoes.end();
};

// Devolver um paciente
export const getUmPaciente = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tablePaciente = new PacienteDAO(conexao);

  try {
    await databaseMedClinic.useDatabase();
    const result = await tablePaciente.getUmPacienteOnDB(req.params)
    res.status(201).send(result);
  } 
  catch (err) {
    res.status(500).send("Erro ao acessar um paciente!");
  }

  await fabricaConexoes.end();
};

// Adiciona um paciente
export const adicionarPaciente = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tablePaciente = new PacienteDAO(conexao);


  try {
    await databaseMedClinic.useDatabase();
    const idAdicionado = await tablePaciente.adicionarPacienteOnDB(req.body);
    res.status(201).send({ id: idAdicionado });
  } 
  catch (err) {
    res.status(500).send("Erro ao adicionar paciente!");
  }

  await fabricaConexoes.end();
};  

// Atualizar um paciente
export const atualizarPaciente = (req, res) => {};

export const deletarPaciente = (req, res) => {};
