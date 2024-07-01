import { PessoaDAO } from "./pessoaDAO.js";

export class PacienteDAO {
  static sql_CreateTable = `
    CREATE TABLE IF NOT EXISTS paciente (
    id INT NOT NULL PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES pessoa(id)
    );`;

  static sql_insertInto = `
    INSERT INTO paciente (id) VALUES (?)
    `;

  static sql_SelectAll = `
    SELECT * 
    FROM pessoa, paciente
    WHERE pessoa.id = paciente.id;`;

  static sql_SelectUm = `
    SELECT * 
    FROM paciente, pessoa
    WHERE paciente.id = pessoa.id 
    and paciente.id = ?;`;

  constructor(conexaoExistente) {
    this._conexao = conexaoExistente;
  }

  async createTable() {
    try {
      await this._conexao.query(PacienteDAO.sql_CreateTable);
      console.log("Tabela Paciente criada com sucesso!");
    } 
    catch (err) {
      console.error("Erro ao criar a tabela Paciente! | " + err.stack);
      throw err;
    }
  }

  async insertInto({ id }) {
    try {
      await this._conexao.execute(PacienteDAO.sql_insertInto, [id]);
      console.log("Dados inseridos na tabela Paciente!");
    } 
    catch (err) {
      console.error("Erro ao inserir dados na tabela Paciente! | " + err.stack);
      throw err;
    }
  }

  // para api
  async getAllPacientesOnDB() {
    try {
      const [result] = await this._conexao.query(PacienteDAO.sql_SelectAll);
      console.log(`Sucesso ao buscar todos os pacientes!`);
      return result;
    } 
    catch (err) {
      console.error(`Erro ao buscar todos os pacientes! | ${err.stack}`);
      throw err;
    }
  }

  async getUmPacienteOnDB({ id }) {
    try {
      const [result] = await this._conexao.execute(PacienteDAO.sql_SelectUm, [id]);
      console.log(`Sucesso ao buscar um paciente!`);
      return result;
    } 
    catch (err) {
      console.error(`Erro ao buscar um paciente! | ${err.stack}`);
      throw err;
    }
  }
  
  async adicionarPacienteOnDB(reqBody) {
    const pessoa = new PessoaDAO(this._conexao);
    const result = await pessoa.adicionarPessoaOnDB(reqBody);
    const idResult = result[0].insertId;
    
    try {
      await this.insertInto({ id: idResult })
      console.log(`Sucesso ao adicionar um paciente!`);
    }
    catch (err) {
      console.log("Erro ao tentar inserir um paciente no banco! | " + err.stack);
    }
  }

  async atualizarPacienteOnDB({ id }) {}

  async deletarPacienteOnDB({ id }) {}
}
