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
    // executa um 'SELECT *' com cláusula WHERE id = ${id}
    const result = await tablePaciente.getOneOnDB(id)
    // caso a consulta tenha êxito, retorna um código 200 - SUCESSO
    res.status(200).send(result);
  } 
  catch (err) {
    // caso algum erro seja encontrado, retorna um INTERNAL SERVER ERROR
    res.status(500).send("Erro ao acessar um paciente!");
  }

  // depois de fazer as modificações no banco, fecha a conexão
  await fabricaConexoes.end();
};

// adiciona um paciente no banco de dados
export const adicionarPaciente = async (req, res) => {
  // abre uma conexão com o banco de dados
  const conexao = await fabricaConexoes.open();
  // instancia uma conexão com a base de dados da clínica
  const databaseMedClinic = new MedClinicDAO(conexao);
  // instancia uma conexão com a tabela paciente
  const tablePaciente = new PacienteDAO(conexao);

  // recebe e armazena os dados do novo paciente a ser inserido - BODY da requisição
  const dados = req.body;

  try {
    // executa um 'USE DATABASE' no SQL
    await databaseMedClinic.useDatabase();
    // insere o paciente na tabela e armazena o ID do novo paciente criado
    const idAdicionado = await tablePaciente.insertInto(dados);
    // caso sucesso, retorna um código 201 - CREATED com o ID do novo paciente
    res.status(201).send({ id: idAdicionado });
  } 
  catch (err) {
    // caso algum erro seja capturado, retorna um INTERNAL SERVER ERROR
    res.status(500).send("Erro ao adicionar paciente!");
  }

  // depois da utilização, fecha a conexão aberta com o banco
  await fabricaConexoes.end();
};  

// atualizar um paciente no banco de dados
export const atualizarPaciente = async (req, res) => {
  // abre uma conexão com o banco de dados
  const conexao = await fabricaConexoes.open();
  // instancia uma conexão com a base de dados da clínica
  const databaseMedClinic = new MedClinicDAO(conexao);
  // abre uma conexão com a tabela pessoa
  const tablePessoa = new PessoaDAO(conexao);

  // armazena o ID do paciente a ser atualizado, fornecido nos parâmetros da requisição
  const { id } = req.params;
  // armazena os novos dados do paciente fornecidos no BODY da requisição
  const novosDados = req.body;

  try {
    // executa um 'USE DATABASE' no SQL
    await databaseMedClinic.useDatabase();
    // atualiza os dados do paciente selecionado pelo ID
    const resultado = await tablePessoa.updateOneOnDB(id, novosDados);

    // 
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
