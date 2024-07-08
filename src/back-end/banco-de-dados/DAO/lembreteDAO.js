import { tableDAO } from "./superclasse/tableDAO.js";

export class LembreteDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `lembrete`;
  static sql_especificacoesTabela = `
    id_lembrete INT AUTO_INCREMENT PRIMARY KEY,
    data_envio DATETIME,
    titulo VARCHAR(100),
    mensagem VARCHAR(255),
    id_paciente INT,
    FOREIGN KEY (id_paciente) REFERENCES paciente(id)`;

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM lembrete;`;

  static sql_SelectOne = `
    SELECT * 
    FROM lembrete
    WHERE lembrete.id_lembrete = ?;`;

  static sql_SelectOnePac = `
    SELECT data_envio, titulo, mensagem
    FROM lembrete
    WHERE lembrete.id_paciente = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }

  //Get lembrete
  async getLembrete(id) {
    try {
      const [rows] = await this._conexao.execute(LembreteDAO.sql_SelectOne, [id]);

      console.log(rows[0].id)

      if (rows.length > 0) {
        return rows[0];
      }
      else {
        throw new Error(`Nenhum id encontrado para o lembrete: ${id}`);
      }
    } catch (err) {
      console.error("Erro ao procurar lembrete no banco! | ", err.stack)
    }

  }

  async getAllLembretesFromPacDAO(idPac) {
    try {
      const [rows] = await this._conexao.execute(LembreteDAO.sql_SelectOnePac, [idPac]);

      // console.log(rows[0].idPac)

      if (rows.length > 0) {
        return rows;
      }
      else {
        throw new Error(`Nenhum id encontrado para o lembrete: ${idPac}`);
      }
    } catch (err) {
      console.error("Erro ao procurar lembrete no banco! | ", err.stack)
    }

  }
}
