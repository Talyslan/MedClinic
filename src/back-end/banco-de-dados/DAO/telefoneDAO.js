export class TelefoneDAO {
  static sql_CreateTable = `
    CREATE TABLE IF NOT EXISTS telefone (
    id INT NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    PRIMARY KEY (id, telefone),
    FOREIGN KEY (id) REFERENCES pessoa(id)
    );`;

  static sql_insertInto = `INSERT INTO telefone (id, telefone) VALUES (?, ?)`;

  constructor(conexaoExistente) {
    this._conexao = conexaoExistente;
  }

  async createTable () {
    try {
      await this._conexao.query(TelefoneDAO.sql_CreateTable);
      console.log("Tabela Telefone criada com sucesso!")
    } 
    catch (err) {
      console.log("Erro ao criar a tabela Telefone! | " + err.stack);
      throw err;
    }
  }

  async insertInto ({ id, telefone }) {
    try {
      await this._conexao.execute(TelefoneDAO.sql_insertInto, [id, telefone]);
      console.log("Dados inseridos na tabela Telefone!");
    } 
    catch (err) {
      console.log("Erro ao inserir dados na tabela Telefone! | " + err.stack);
      throw err;
    }
  }
}
