import { FabricaConexoes } from "../../../banco-de-dados/FabricaConexoes.js";
import { MedClinicDAO } from "../../../banco-de-dados/DAO/databaseMedClinicDAO.js";
import { AgendamentoDAO } from "../../../banco-de-dados/DAO/agendamentoDAO.js";

const fabricaConexoes = new FabricaConexoes();

export const getAllAgendamentos = async (req, res) => {
    const conexao = await fabricaConexoes.open();
    const databaseMedClinic = new MedClinicDAO(conexao);
    const tableAgendamento = new AgendamentoDAO(conexao);
      
    try {
      await databaseMedClinic.useDatabase();
      const result = await tableAgendamento.getAllOnDB()
      res.status(201).send(result);
    } 
    catch (err) {
      res.status(500).send("Erro ao acessar os Agendamentos!");
    }
    
    await fabricaConexoes.end();
  };
  
export const getAllAgendamentosById = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tableAgendamento = new AgendamentoDAO(conexao);
    
  const { idPac } = req.params;

  try {
    await databaseMedClinic.useDatabase();
    const result = await tableAgendamento.getOneOnDB(idPac)
    res.status(201).send(result);
  } 
  catch (err) {
    res.status(500).send("Erro ao acessar os Agendamentos!");
  }
  
  await fabricaConexoes.end();
};

export const getMedicoOfAgendamento = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tableAgendamento = new AgendamentoDAO(conexao);

  const { idPac, idMed } = req.params;

  try {
    await databaseMedClinic.useDatabase();
    const result = await tableAgendamento.getMedicoOfAgendamentoOnDB(idPac, idMed)
    res.status(201).send(result);
  } 
  catch (err) {
    res.status(500).send("Erro ao acessar os Agendamentos!");
  }
  
  await fabricaConexoes.end();
};

// adiciona um agendamento
export const adicionarAgendamento = async (req, res) => {
  const conexao = await fabricaConexoes.open();
  const databaseMedClinic = new MedClinicDAO(conexao);
  const tableAgendamento = new AgendamentoDAO(conexao);

  const { data, hora, id_medico, id_paciente }= req.body
  const dados = {dataAgendamento: data, hora, id_medico, id_paciente}
  try {
    await databaseMedClinic.useDatabase();
    await tableAgendamento.insertInto(dados);
    res.status(201).send({ message: "Agendamento inserido!" });
  } 
  catch (err) {
    res.status(500).send("Erro ao adicionar médico!");
  }

  await fabricaConexoes.end();
};