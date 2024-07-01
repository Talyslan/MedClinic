export class PessoaDAO {
  static sql_CreateTable = `
    CREATE TABLE IF NOT EXISTS pessoa (
      id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      senha VARCHAR(255) NOT NULL,
      data_nasc DATE NOT NULL,
      cpf CHAR(11) NOT NULL,
      email VARCHAR(255)
    );`;

  static sql_insertInto = `
    INSERT INTO pessoa (nome, senha, data_nasc, cpf, email) 
    VALUES (?, ?, ?, ?, ?)`;

  constructor(conexaoExistente) {
    this._conexao = conexaoExistente;
  }

  async createTable () {
    try {
      await this._conexao.query(PessoaDAO.sql_CreateTable);
      console.log("Tabela Pessoa criada com sucesso!");
    } 
    catch (err) {
      console.error("Erro ao criar a tabela Pessoa! | " + err.stack);
      throw err;
    }
  }

  async insertInto ({ nome, senha, data_nasc, cpf, email }) {
    const values = [nome, senha, data_nasc, cpf, email];

    try {
      await this._conexao.execute(PessoaDAO.sql_insertInto, values);
      // const result = await this._conexao.query(PessoaDAO.sql_insertInto, values);
      // return result.insertId;
      console.log("Dados inseridos na tabela Pessoa!");
    } 
    catch (err) {
      console.error("Erro ao inserir dados na tabela Pessoa! | " + err.stack);
      throw err;
    }
  }

  async adicionarPessoaOnDB({ nome, senha, data_nasc, cpf, email }) {
    const values = [nome, senha, data_nasc, cpf, email];

    try {
      const result = await this._conexao.query(PessoaDAO.sql_insertInto, values);
      return result
    } catch (err) {
      console.error(`Erro ao adicionar pessoa no banco de dados: ${err.stack}`);
      throw err;
    }
  }
}
