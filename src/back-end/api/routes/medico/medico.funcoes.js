import { FabricaConexoes } from "../../../banco-de-dados/FabricaConexoes.js";
import { MedClinicDAO } from "../../../banco-de-dados/DAO/databaseMedClinicDAO.js";
import { MedicoDAO } from "../../../banco-de-dados/DAO/medicoDAO.js";
import { PessoaDAO } from "../../../banco-de-dados/DAO/pessoaDAO.js";

const fabricaConexoes = new FabricaConexoes();

// Devolver todos os médicos
export const getAllMedicos = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tableMedico = new MedicoDAO(conexao);

  try {
    await databaseMedClinic.useDatabase();
    const result = await tableMedico.getAllOnDB()
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

  const { id } = req.params;

  try {
    await databaseMedClinic.useDatabase();
    const result = await tableMedico.getOneOnDB(id)
    res.status(201).send(result);
  } 
  catch (err) {
    res.status(500).send("Erro ao acessar um médico!");
  }

  await fabricaConexoes.end();
};

// adiciona um médico
export const adicionarMedico = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tableMedico = new MedicoDAO(conexao);

  const dados = req.body

  try {
    await databaseMedClinic.useDatabase();
    const idAdicionado = await tableMedico.insertInto(dados);
    res.status(201).send({ id: idAdicionado });
  } 
  catch (err) {
    res.status(500).send("Erro ao adicionar médico!");
  }

  await fabricaConexoes.end();
};

// atualizar um médico
export const atualizarMedico = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tableMedico = new MedicoDAO(conexao);
  const tablePessoa = new PessoaDAO(conexao);

  const { id } = req.params;
  const {especializacao, crm, valorConsulta, ...pessoaDados} = req.body;

  const medicoDados = {especializacao, crm, valorConsulta}

  console.log(medicoDados)
  console.log(pessoaDados)

  try {
    await databaseMedClinic.useDatabase();
    const resultado_pessoa = await tablePessoa.updateOneOnDB(id, pessoaDados);
    const resultado_med = await tableMedico.updateOneOnDB(id, medicoDados);

    if (resultado_pessoa && resultado_med) {
      res.status(200).send("Médico atualizado com sucesso!");
    } 
    else if (resultado_pessoa){
      res.status(500).send("Dados pessoais do médico funcionando! Dados próprios... não.")
    }
    else if (resultado_med) { 
      res.status(500).send("Dados do médico funcionando! Dados pessoais... nem tanto.")
    }
    else {
      res.status(404).send("Médico não encontrado!");
    }
  } 
  catch (err) {
    res.status(500).send("Erro ao atualizar Médico!");
  }

  await fabricaConexoes.end();
};

// deletar um médico
export const deletarMedico = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tableMedico = new MedicoDAO(conexao);

  const { id } = req.params;

  try {
    await databaseMedClinic.useDatabase();
    const resultado = await tableMedico.deleteOneFromDB(id);

    if (resultado) {
      res.status(200).send("Médico deletado com sucesso!");
    } 
    else {
      res.status(404).send("Médico não encontrado!");
    }
  } 
  catch (err) {
    res.status(500).send("Erro ao deletar Médico!");
  }

  await fabricaConexoes.end();
};
