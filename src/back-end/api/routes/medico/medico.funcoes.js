import { FabricaConexoes } from "../../../banco-de-dados/FabricaConexoes.js";
import { MedClinicDAO } from "../../../banco-de-dados/DAO/databaseMedClinicDAO.js";
import { MedicoDAO } from "../../../banco-de-dados/DAO/medicoDAO.js";

const fabricaConexoes = new FabricaConexoes();

// Devolver todos os médicos
export const getAllMedicos = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tableMedico = new MedicoDAO(conexao);

  try {
    await databaseMedClinic.useDatabase();
    const result = await tableMedico.getAllMedicosOnDB()
    res.status(201).send(result);
  } 
  catch (err) {
    res.status(500).send("Erro ao acessar médicos!");
  }

  await fabricaConexoes.end();
};

// Devolver um médico
export const getUmMedico = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tableMedico = new MedicoDAO(conexao);

  try {
    await databaseMedClinic.useDatabase();
    const result = await tableMedico.getUmMedicoOnDB(req.params)
    res.status(201).send(result);
  } 
  catch (err) {
    res.status(500).send("Erro ao acessar um médico!");
  }

  await fabricaConexoes.end();
};

// Adiciona um paciente
export const adicionarMedico = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tableMedico = new MedicoDAO(conexao);

  try {
    await databaseMedClinic.useDatabase();
    const idAdicionado = await tableMedico.adicionarMedicoOnDB(req.body);
    res.status(201).send({ id: idAdicionado });
  } 
  catch (err) {
    res.status(500).send("Erro ao adicionar médico!");
  }

  await fabricaConexoes.end();
};
export const atualizarMedico = (req, res) => {};
export const deletarMedico = (req, res) => {};
