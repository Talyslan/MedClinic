export class MedClinicDAO {
  // sql para criar banco
  static sql_CreateDatabase = `CREATE DATABASE IF NOT EXISTS dbmedclinic;`;
  // sql para usar banco
  static sql_UseDatabase = `USE dbmedclinic;`;
  // drop para evitar a inserção múltiplas vezes dos TESTEinserts
  static sql_dropDatabase = `DROP DATABASE IF EXISTS dbmedclinic;`;

  constructor(conexaoExistente) {
    this._conexao = conexaoExistente;
  }

  async createDatabase() {
    console.log("criando banco.");

    try {
      await this._conexao.query(MedClinicDAO.sql_dropDatabase);
      await this._conexao.query(MedClinicDAO.sql_CreateDatabase);

      console.log("dbmedclinic criado com sucesso!");
    } 
    catch (err) {
      console.error("Erro ao criar banco dbmedclinic! | " + err.stack);
      throw err;
    }
  }

  async useDatabase() {
    try {
      await this._conexao.query(MedClinicDAO.sql_UseDatabase);
      console.log("dbmedclinic em uso!");
    } 
    catch (err) {
      console.error("Erro ao usar dbmedclinic! | " + err.stack);
      throw err;
    }
  }
}