import { tableDAO } from "./superclasse/tableDAO.js";

export class PessoaDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `pessoa`;
  static sql_especificacoesTabela = `
      id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      senha VARCHAR(255) NOT NULL,
      data_nasc DATE NOT NULL,
      cpf CHAR(11) NOT NULL,
      email VARCHAR(255) NOT NULL`;

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM pessoa;`;

  static sql_CreateTable
  static sql_SelectEmail = `SELECT email FROM pessoa WHERE email = ?`;
  static sql_SelectSenha = `SELECT senha FROM pessoa WHERE email = ?`;

  static sql_SelectOne = `
      SELECT * 
      FROM medico, pessoa
      WHERE medico.id = pessoa.id 
      and medico.id = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }

  // cria tabela pessoa se ela nao existir
  async _inicializePessoa() {
    const sql_CreateTable = `
    CREATE TABLE IF NOT EXISTS ${PessoaDAO.sql_nomeTabela}
    (${PessoaDAO.sql_especificacoesTabela});`
    await this._conexao.query(sql_CreateTable);
  }

  // funçao auxiliar para inserir na tabela medico
  async _inserirMedico(objMedicoMais) {
    super.insertInto(objMedicoMais)
    console.log(`Médico adicionado na tabela com sucesso com ID: ${objMedicoMais.id}!`);
  }

  // funçao auxiliar para inserir na tabela paciente
  async _inserirPaciente(pessoaId) {
    super.insertInto(pessoaId)
    console.log(`Paciente adicionado na tabela com sucesso com ID: ${pessoaId.id}!`);
  }

  async createTable() {
    // cria tabela pessoa se ela nao existir
    this._inicializePessoa();

    super.createTable()
  }

  // inserir uma pessoa e, dependendo dos dados recebidos, inserir em medico ou paciente
  async insertInto(obj) {
    // desestruturo o obj para pegar apenas os valores de pessoa
    const { especializacao, crm, valorConsulta, ...pessoaDados } = obj;

    // pega o obj e estrutura sua string para o InsertInto
    try {
      // Inserindo dados na tabela pessoa
      console.log('to no try de PessoaDAO')

      const id = await super.insertInto(pessoaDados, PessoaDAO.sql_nomeTabela);
      const objMedicoMais = { id, especializacao, crm, valorConsulta };
      // console.log(objMedicoMais)

      // verifica se tem crm e especializacao
      if (crm && especializacao && valorConsulta) {
        await this._inserirMedico(objMedicoMais);
      }
      else {
        await this._inserirPaciente({ id });
      }
    }
    catch (err) {
      console.error(`Erro ao inserir dados pac ou med (pessoa)! | ${err.stack}`);
      throw err;
    }
  }

  // metodos de consulta
  async getEmail(email) {
    try {
      const [result] = await this._conexao.execute(PessoaDAO.sql_SelectEmail, [email]);
      return result;
    }
    catch (err) {
      console.log("Erro ao procurar email no banco! | ", err.stack)
    }

  }

  async getId(email) {
    try {
      const [rows] = await this._conexao.execute(PessoaDAO.sql_SelectId, [email]);

      console.log(rows)

      if (rows.length > 0) {
        return rows[0].id; // Retorna a senha como uma string
      }
      else {
        throw new Error(`Nenhum id encontrado para o email: ${email}`);
      }
    }
    catch (err) {
      console.error(`Erro ao buscar o id! | ${err.stack}`);
      throw err;
    }
  }

  async getSenha(email) {
    try {
      const [rows] = await this._conexao.execute(PessoaDAO.sql_SelectSenha, [email]);

      console.log(rows)

      if (rows.length > 0) {
        return rows[0].senha; // Retorna a senha como uma string
      }
      else {
        throw new Error(`Nenhuma senha encontrada para o email: ${email}`);
      }
    }
    catch (err) {
      console.error(`Erro ao buscar a senha! | ${err.stack}`);
      throw err;
    }
  }

}

