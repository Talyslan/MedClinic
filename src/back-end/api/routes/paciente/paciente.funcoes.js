// importa a fábrica de conexões para ter acesso ao banco
import { FabricaConexoes } from "../../../banco-de-dados/FabricaConexoes.js";
// importa o DAO para interação com a base de dados da clínica
import { MedClinicDAO } from "../../../banco-de-dados/DAO/databaseMedClinicDAO.js";
// importa o DAO para a interação com a tabela do paciente
import { PacienteDAO } from "../../../banco-de-dados/DAO/pacienteDAO.js";
// importa o DAO para interação com a tabela das pessoas
import { PessoaDAO } from "../../../banco-de-dados/DAO/pessoaDAO.js";

// instancia a fábrica de conexões para termos acesso ao banco
const fabricaConexoes = new FabricaConexoes();

// devolve todos os pacientes do banco de dados
export const getAllPacientes = async (req, res) => {
  // abre uma conexão com o banco de dados
  const conexao = await fabricaConexoes.open();
  // instancia uma conexão com a base de dados da clínica
  const databaseMedClinic = new MedClinicDAO(conexao);
  // instancia uma conexão com a tabela paciente
  const tablePaciente = new PacienteDAO(conexao);

  try {
    // executa um 'USE DATABASE' no SQL
    await databaseMedClinic.useDatabase();
    // executa um 'SELECT *' no SQL e devolve no formato JSON
    const result = await tablePaciente.getAllOnDB()
    // caso êxito, retorna código 200 - SUCESSO
    res.status(200).send(result);
  } 
  catch (err) {
    // caso algum erro seja capturado, retorna um INTERNAL SERVER ERROR
    res.status(500).send("Erro ao acessar pacientes!");
  }

  // depois de utilizar o banco, feche sua conexão
  await fabricaConexoes.end();
};

// retorna um paciente do banco de dados a partir do ID fornecido
export const getUmPaciente = async (req, res) => {
  // abre uma conexão com o banco 
  const conexao = await fabricaConexoes.open();
  // instancia uma conexão com a base de dados da clínica
  const databaseMedClinic = new MedClinicDAO(conexao);
  // instancia uma conexão com a base de dados do paciente
  const tablePaciente = new PacienteDAO(conexao);

  // recebe o ID do paciente dos parâmetros da requisição e armazena num objeto
  const { id } = req.params;

  try {
    // executa um 'USE DATABASE' no SQL
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
  const tablePessoa = new PessoaDAO(conexao);

  const { id } = req.params;
  const novosDados = req.body;

  try {
    await databaseMedClinic.useDatabase();
    const resultado = await tablePessoa.updateOneOnDB(id, novosDados);

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
