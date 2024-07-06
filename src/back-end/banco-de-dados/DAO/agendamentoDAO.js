import { tableDAO } from "./superclasse/tableDAO.js";

export class AgendamentoDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `agendamento`;
  static sql_especificacoesTabela = `
    id_agendamento INT AUTO_INCREMENT PRIMARY KEY,
    status INT NOT NULL,
    tipo_medico VARCHAR(30),
    data_hora DATETIME`;

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM agendamento;`;

  static sql_SelectOne = `
    SELECT * 
    FROM agendamento
    WHERE agendamento.id_agendamento = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}
