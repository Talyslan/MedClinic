export class tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = ``
  static sql_especificacoesTabela = ``;

  // variaveis sql para consultas
  static sql_SelectAll = ``;
  static sql_SelectOne = ``;

  constructor(conexaoExistente) {
    this._conexao = conexaoExistente;
  }

  async createTable() {
    const sql_CreateTable = `
      CREATE TABLE IF NOT EXISTS 
      ${this.constructor.sql_nomeTabela} 
      (${this.constructor.sql_especificacoesTabela});`;

    try {
      await this._conexao.query(sql_CreateTable);
      console.log(`Tabela ${this.constructor.sql_nomeTabela} criada com sucesso!`);
    }
    catch (err) {
      console.error(`Erro ao criar a tabela ${this.constructor.sql_nomeTabela}! | ${err.stack}`);
      throw err;
    }
  }

  async insertInto(obj, tableName = this.constructor.sql_nomeTabela) {
    const propriedades = Object.keys(obj).join(", ");
    const valores = Object.values(obj);
    const qntdDeInterrogacao = Array(valores.length).fill('?').join(", ");

    const sql_insertInto = `
      INSERT INTO ${tableName} (${propriedades}) 
      VALUES (${qntdDeInterrogacao});`;

      console.log(sql_insertInto, valores)

    try {
      const [result] = await this._conexao.execute(sql_insertInto, valores);
      console.log(`Dados inseridos na tabela ${tableName}!`);
      return result.insertId;
    }
    catch (err) {
      console.error(`Erro ao inserir dados na tabela ${tableName}! | ${err.stack}`);
      throw err;
    }
  }

  // metodos para consultas
  async getAllOnDB() {
    try {
      const [result] = await this._conexao.query(this.constructor.sql_SelectAll);
      console.error(`Sucesso ao buscar todos os dados na tabela ${this.constructor.sql_nomeTabela}!`);
      return result;
    }
    catch (err) {
      console.error(`Erro ao buscar todos os dados na tabela ${this.constructor.sql_nomeTabela} ! | ${err.stack}`);
      throw err;
    }
  }

  async getOneOnDB(id) {
    try {
      const [result] = await this._conexao.execute(this.constructor.sql_SelectOne, [id]);
      console.log(`Sucesso ao buscar um ${this.constructor.sql_nomeTabela}!`);
      return result;
    } 
    catch (err) {
      console.error(`Erro ao buscar um ${this.constructor.sql_nomeTabela}! | ${err.stack}`);
      throw err;
    }
  }

  async updateOneOnDB(id, novosDados) {
    const camposAtualizacao = Object.keys(novosDados).map(chave => `${chave} = ?`).join(", ");
    const valoresAtualizacao = Object.values(novosDados);

    // criação do update
    const sql_update = `
      UPDATE ${this.constructor.sql_nomeTabela}
      SET ${camposAtualizacao} 
      WHERE id = ${id};`;

    try {
      const result = await this._conexao.execute(sql_update, valoresAtualizacao);
      console.log(`${this.constructor.sql_nomeTabela} com ID ${id} atualizado com sucesso!`);
      return result;
    } 
    catch (err) {
      console.error(`Erro ao atualizar ${this.constructor.sql_nomeTabela} com ID ${id}! | ${err.stack}`);
      throw err;
    }
  }

  async deleteOneFromDB(id) {
    const sql_delete = `
    DELETE FROM ${this.constructor.sql_nomeTabela}
    WHERE id = ${id}`;

    try { 
      const result = await this._conexao.execute(sql_delete, {id});
      console.log(`${this.constructor.sql_nomeTabela} com ID ${id} deletado com sucesso!`);
      return result;
    }
    catch (err) { 
      console.error(`Erro ao deletar item com ID ${id} da tabela ${this.constructor.sql_nomeTabela} | ${err.stack}`);
      throw err;
    }
  }
}