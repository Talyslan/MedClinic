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

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}