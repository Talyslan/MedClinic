import mysql from "mysql2/promise";


export class FabricaConexoes {

  constructor() {
    this._config = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: "",
    };
    this._conexao = undefined;
  }

  async open() {
    // conectando...
    try {
      this._conexao = await mysql.createConnection(this._config);
      console.log(`-------conexão bem sucedida! ID: ${this._conexao.threadId}-------`);

      return this._conexao;
    } 
    catch (err) {
      console.error(`Erro ao tentar se conectar ao Banco de Dados! | ${err.stack}`);
      this.end();
    }
  }

  async end() {
    // encerrando conexao...
    if (this._conexao !== undefined) {
      try {
        await this._conexao.end();
        console.log(`-------conexão encerrada!-------`);
      } 
      catch (err) {
        console.error(`Erro ao tentar encerrar conexão com o Banco de Dados! | ${err.stack}`);
      }
    }
  }
}
