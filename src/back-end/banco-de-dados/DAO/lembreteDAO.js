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
    id_medico INT,
    FOREIGN KEY (id_paciente) REFERENCES paciente(id),
    FOREIGN KEY (id_medico) REFERENCES medico(id)`;

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
  
    static sql_SelectOneMed = `
    SELECT data_envio, titulo, mensagem, id_paciente
    FROM lembrete
    WHERE lembrete.id_medico = ?;`;

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

  async getAllLembretesFromPacDAOOnDB(idPac) {
    try {
      const [rows] = await this._conexao.execute(LembreteDAO.sql_SelectOnePac, [idPac]);

      console.log(rows)
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

  async getAllLembretesFromMedDAOOnDB(idMed) {
    try {
      const [rows] = await this._conexao.execute(LembreteDAO.sql_SelectOneMed, [idMed]);

      console.log(rows)
      if (rows.length > 0) {
        return rows;
      }
      else {
        throw new Error(`Nenhum id encontrado para o lembrete: ${idMed}`);
      }
    } catch (err) {
      console.error("Erro ao procurar lembrete no banco! | ", err.stack)
    }
  }

  async getAllLembretesOnDB() {
    try {
      const [rows] = await this._conexao.query(LembreteDAO.sql_SelectAll);

      console.log(rows)
      if (rows.length > 0) {
        return rows;
      }
      else {
        throw new Error(`Nenhum lembrete`);
      }
    } catch (err) {
      console.error("Erro ao procurar lembrete no banco! | ", err.stack)
    }
  }
}
