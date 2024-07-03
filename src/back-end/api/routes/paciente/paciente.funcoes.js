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
    const result = await tablePaciente.getAllOnDB()
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

  const { id } = req.params;

  try {
    await databaseMedClinic.useDatabase();
    const result = await tablePaciente.getOneOnDB(id)
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

  const dados = req.body;

  try {
    await databaseMedClinic.useDatabase();
    const idAdicionado = await tablePaciente.insertInto(dados);
    res.status(201).send({ id: idAdicionado });
  } 
  catch (err) {
    res.status(500).send("Erro ao adicionar paciente!");
  }

  await fabricaConexoes.end();
};  

// atualizar um paciente
export const atualizarPaciente = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tablePaciente = new PacienteDAO(conexao);

  const { id } = req.params;
  const novosDados = req.body;

  try {
    await databaseMedClinic.useDatabase();
    const resultado = await tablePaciente.updateOneOnDB(id, novosDados);

    if (resultado) {
      res.status(200).send("Paciente atualizado com sucesso!");
    } 
    else {
      res.status(404).send("Paciente não encontrado!");
    }
  } 
  catch (err) {
    res.status(500).send("Erro ao atualizar paciente!");
  }

  await fabricaConexoes.end();
};

// deletar um paciente
export const deletarPaciente = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tablePaciente = new PacienteDAO(conexao);

  const { id } = req.params;

  try {
    await databaseMedClinic.useDatabase();
    const resultado = await tablePaciente.deleteOneFromDB(id);

    if (resultado) {
      res.status(200).send("Paciente deletado com sucesso!");
    } 
    else {
      res.status(404).send("Paciente não encontrado!");
    }
  } 
  catch (err) {
    res.status(500).send("Erro ao deletar paciente!");
  }

  await fabricaConexoes.end();

}
