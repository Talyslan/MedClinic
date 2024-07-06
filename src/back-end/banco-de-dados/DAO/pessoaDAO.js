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
  async _inserirMedico(pessoaId, especializacao, crm) {
    const sql_insertMedico = `INSERT INTO medico (id, especializacao, crm) VALUES (?, ?, ?)`;
    await this._conexao.execute(sql_insertMedico, [pessoaId, especializacao, crm]);
    console.log(`Médico adicionado na tabela com sucesso com ID: ${pessoaId}!`);
  }

  // funçao auxiliar para inserir na tabela paciente
  async _inserirPaciente(pessoaId) {
    const sql_insertPaciente = `INSERT INTO paciente (id) VALUES (?)`;
    await this._conexao.execute(sql_insertPaciente, [pessoaId]);
    console.log(`Paciente adicionado na tabela com sucesso com ID: ${pessoaId}!`);
  }

  async createTable() {
    // cria tabela pessoa se ela nao existir
    this._inicializePessoa();

    super.createTable()
  }

// inserir uma pessoa e, dependendo dos dados recebidos, inserir em medico ou paciente
  async insertInto(obj) {
    // desestruturo o obj para pegar apenas os valores de pessoa
    const { especializacao, crm, ...pessoaDados } = obj;
    
    // pega o obj e estrutura sua string para o InsertInto
    const propriedades = Object.keys(pessoaDados).join(", ");
    const valores = Object.keys(pessoaDados).map(chave => pessoaDados[chave]);
    const qntdDeInterrogacao = Array(valores.length).fill('?').join(", ");

    const sql_insertInto = `
    INSERT INTO ${PessoaDAO.sql_nomeTabela} (${propriedades}) 
    VALUES (${qntdDeInterrogacao});`;

    try {
      // Inserindo dados na tabela pessoa
      console.log('to no try')
      console.log(sql_insertInto)
      console.log(valores)
      const [resultPessoa] = await this._conexao.execute(sql_insertInto, valores);
      const pessoaId = resultPessoa.insertId;

      // verifica se tem crm e especializacao
      if (crm && especializacao) {
        await this._inserirMedico(pessoaId, especializacao, crm);
      } 
      else {
        await this._inserirPaciente(pessoaId);
      }
    } 
    catch (err) {
      console.error(`Erro ao inserir dados! | ${err.stack}`);
      throw err;
    }
  }
}