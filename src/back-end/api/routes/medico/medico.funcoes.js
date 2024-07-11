// importa a fábrica de conexões para acesso ao banco
import { FabricaConexoes } from "../../../banco-de-dados/FabricaConexoes.js";
// importa o DAO da base de dados para permitir o uso da base de dados
import { MedClinicDAO } from "../../../banco-de-dados/DAO/databaseMedClinicDAO.js";
// importa o DAO que permite o acesso à tabela do médico
import { MedicoDAO } from "../../../banco-de-dados/DAO/medicoDAO.js";
// importa o DAO que permite o acesso à tabela do paciente
import { PessoaDAO } from "../../../banco-de-dados/DAO/pessoaDAO.js";

// instancia a fábrica de conexões para acesso ao banco de dados 
const fabricaConexoes = new FabricaConexoes();

// retorna todos os médicos em formato JSON
export const getAllMedicos = async (req, res) => {
  // abre uma conexão com o banco de dados 
  const conexao = await fabricaConexoes.open();
  // instancia a conexão com a base de dados da clínica
  const databaseMedClinic = new MedClinicDAO(conexao);
  // instancia a conexão com a base de dados do médico
  const tableMedico = new MedicoDAO(conexao);

  try {
    // executa o 'USE DATABASE' no SQL
    await databaseMedClinic.useDatabase();
    // executa um 'SELECT *' e retorna em formato JSON
    const result = await tableMedico.getAllOnDB()
    // se bem sucedido, retorna um status de 'SUCESSO'
    res.status(200).send(result);
  } 
  catch (err) {
    // caso algum erro aconteça, retorna um status de 'INTERNAL SERVER ERROR'
    res.status(500).send("Erro ao acessar médicos!");
  }

  // depois do trabalho com o banco, fecha a conexão criada
  await fabricaConexoes.end();
};

// retorna um médico em formato JSON com base num ID fornecido
export const getUmMedico = async (req, res) => {
  // abre uma conexão com o banco de dados
  const conexao = await fabricaConexoes.open();
  // instancia a conexão com a base de dados da clínica
  const databaseMedClinic = new MedClinicDAO(conexao);
  // instancia a conexão com a base de dados do médico
  const tableMedico = new MedicoDAO(conexao);

  // recebe o ID do médico fornecido nos parâmetros da requisição e o armazena num objeto
  const { id } = req.params;

  try {
    // executa o 'USE DATABASE' no SQL
    await databaseMedClinic.useDatabase();
    // executa um 'SELECT *' com uma cláusula WHERE
    const result = await tableMedico.getOneOnDB(id)
    // se bem sucedido, retorna um status de 'SUCESSO'
    res.status(200).send(result);
  } 
  catch (err) {
    // caso algum erro aconteça, retorna um status de 'INTERNAL SERVER ERROR'
    res.status(500).send("Erro ao acessar um médico!");
  }

  // depois do trabalho com o banco, fecha a conexão criada  
  await fabricaConexoes.end();
};

// adiciona um médico no banco de dados
export const adicionarMedico = async (req, res) => {
  // abre uma conexão com o banco de dados 
  const conexao = await fabricaConexoes.open();
  // instancia a conexão com a base de dados da clínica
  const databaseMedClinic = new MedClinicDAO(conexao);
  // instancia a conexão com a base de dados do médico
  const tableMedico = new MedicoDAO(conexao);

  // recebe os dados passados como BODY da requisição
  const dados = req.body

  try {
    // executa o 'USE DATABASE' no SQL
    await databaseMedClinic.useDatabase();
    // realiza um INSERT na tabela médico com os dados recebidos
    const idAdicionado = await tableMedico.insertInto(dados);
    // retorna um STATUS de 'CRIADO' e o ID do médico atribuído caso sucesso
    res.status(201).send({ id: idAdicionado });
  } 
  catch (err) {
    // se um erro for encontrado, retorna um 'INTERNAL SERVER ERROR'
    res.status(500).send("Erro ao adicionar médico!");
  }

  // depois de trabalhar com o banco, fecha a conexão criada
  await fabricaConexoes.end();
};

// atualiza um médico existente com dados fornecidos
export const atualizarMedico = async (req, res) => {
  // abre uma conexão com o banco de dados
  const conexao = await fabricaConexoes.open();
  // instancia a conexão com a base de dados da clínica
  const databaseMedClinic = new MedClinicDAO(conexao);
  // instancia a conexão com a tabela dos médicos
  const tableMedico = new MedicoDAO(conexao);
  // instancia a conexão com a tabela das pessoas
  const tablePessoa = new PessoaDAO(conexao);

  // recebe o ID do médico a ser atualizado, passado nos parâmetros da requisição
  const { id } = req.params;
  // recebe e categoriza em dois objetos os novos dados do médico passados no BODY da requisição
  // pessoaDados possui todos os dados que uma pessoa contém, como nome e CPF
  const {especializacao, crm, valorConsulta, ...pessoaDados} = req.body;

  // este objeto contém apenas dados que só médicos possuem
  const medicoDados = {especializacao, crm, valorConsulta}

  try {
    // executa o 'USE DATABASE' no SQL
    await databaseMedClinic.useDatabase();
    // executa um 'UPDATE' na tabela pessoa com os dados para pessoa fornecidos
    const resultado_pessoa = await tablePessoa.updateOneOnDB(id, pessoaDados);
    // executa um 'UPDATE' ma tabela médico com os dados de médicos fornecidos
    const resultado_med = await tableMedico.updateOneOnDB(id, medicoDados);

    // se ambos os UPDATES tiverem êxito, retorna um status 200 - SUCESSO
    if (resultado_pessoa && resultado_med) {
      res.status(200).send("Médico atualizado com sucesso!");
    } 
    // se é possível atualizar os dados pessoais do médico, mas não dados próprios da classe médico, retorna um INTERNAL SERVER ERROR
    else if (resultado_pessoa){
      res.status(500).send("Dados pessoais do médico funcionando! Dados próprios... não.")
    }
    // se o contrário acontecer, também retorna um INTERNAL SERVER ERROR
    else if (resultado_med) { 
      res.status(500).send("Dados do médico funcionando! Dados pessoais... nem tanto.")
    }
    // se nenhum dos resultados retornou algo, o médico não foi encontrado no banco de dados, status 404 NOT FOUND
    else {
      res.status(404).send("Médico não encontrado!");
    }
  } 
  catch (err) {
    // se algum erro acontecer, retorna um INTERNAL SERVER ERROR
    res.status(500).send("Erro ao atualizar Médico!");
  }

  // depois do trabalho com o banco de dados, fecha a conexão criada
  await fabricaConexoes.end();
};

// deleta um médico da tabela médico
export const deletarMedico = async (req, res) => {
  // abre uma conexão com o banco de dados
  const conexao = await fabricaConexoes.open();
  // instancia uma conexão com a base de dados da clínica
  const databaseMedClinic = new MedClinicDAO(conexao);
  // instancia uma conexão com a tabela médico
  const tableMedico = new MedicoDAO(conexao);

  // recebe o ID do médico dos parâmetros da requisição e armazena num objeto
  const { id } = req.params;

  try {
    // executa um 'USE DATABASE' no SQL
    await databaseMedClinic.useDatabase();
    // deleta uma tupla da tabela médico com base no ID fornecido
    const resultado = await tableMedico.deleteOneFromDB(id);

    if (resultado) {
      // retorna um status 200 - SUCESSO se o DELETE obtiver êxito 
      res.status(200).send("Médico deletado com sucesso!");
    } 
    else {
      // caso o médico não seja encontrado no banco de dados, retorna 404 - NOT FOUND
      res.status(404).send("Médico não encontrado!");
    }
  } 
  catch (err) {
    // se algum erro for encontado, retorna um INTERNAL SERVER ERROR
    res.status(500).send("Erro ao deletar Médico!");
  }

  // depois do trabalho com o banco, fecha a conexão criada
  await fabricaConexoes.end();
};
