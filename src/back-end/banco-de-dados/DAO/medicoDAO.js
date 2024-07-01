import { PessoaDAO } from "./pessoaDAO.js";

export class MedicoDAO {
  static sql_CreateTable = `
    CREATE TABLE IF NOT EXISTS medico (
    id INT NOT NULL PRIMARY KEY,
    especializacao VARCHAR(255) NOT NULL,
    crm VARCHAR(255) NOT NULL,
    FOREIGN KEY (id) REFERENCES pessoa(id)
    );`;

  static sql_insertInto = `
    INSERT INTO medico (id, especializacao, crm) 
    VALUES (?, ?, ?)`;
  
  static sql_SelectAll = `
    SELECT * 
    FROM pessoa, medico
    WHERE pessoa.id = medico.id;`;

  static sql_SelectUm = `
    SELECT * 
    FROM medico, pessoa
    WHERE medico.id = pessoa.id 
    and medico.id = ?;`;

  constructor(conexaoExistente) {
    this._conexao = conexaoExistente;
  }

  async createTable() {
    try {
      await this._conexao.query(MedicoDAO.sql_CreateTable);

      console.log("Tabela Medico criada com sucesso!");
    } 
    catch (err) {
      console.log("Erro ao criar a tabela createTable_Medico! | " + err.stack);
    }
  }

  async insertInto({ id, especializacao, crm }) {
    const values = [id, especializacao, crm];

    try {
      await this._conexao.execute(MedicoDAO.sql_insertInto, values);
      console.log("Dados inseridos na tabela Médico!");
    } 
    catch (err) {
      console.log("Erro ao inserir dados na tabela Médico! | " + err.stack);
      throw err;
    }
  }

  // para api
  async getAllMedicosOnDB() {
    try {
      const [result] = await this._conexao.query(MedicoDAO.sql_SelectAll);
      console.error(`Sucesso ao buscar todos os médicos!`);
      return result;
    }
    catch (err) {
      console.error(`Erro ao buscar todos os médicos! | ${err.stack}`);
      throw err;
    }
  }

  async getUmMedicoOnDB({ id }) {
    try {
      const [result] = await this._conexao.execute(MedicoDAO.sql_SelectUm, [id]);
      console.log(`Sucesso ao buscar um médico!`);
      return result;
    } 
    catch (err) {
      console.error(`Erro ao buscar um médico! | ${err.stack}`);
      throw err;
    }
  }

  async adicionarMedicoOnDB(reqBody) {
    const pessoa = new PessoaDAO(this._conexao);
    const result = await pessoa.adicionarPessoaOnDB(reqBody);
    const { especializacao, crm } = reqBody;
    const idResult = result[0].insertId;
    const values = { id: idResult, especializacao, crm };
    
    try {
      await this.insertInto(values)
      console.log(`Sucesso ao adicionar um médico!`);
    }
    catch (err) {
      console.log("Erro ao tentar inserir um médico no banco! | " + err.stack);
    }
  }
}
