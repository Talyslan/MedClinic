import { tableDAO } from "./superclasse/tableDAO.js";

export class DisponibilidadeDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `disponibilidade`;
  static sql_especificacoesTabela = `
    id_disponibilidade INT AUTO_INCREMENT PRIMARY KEY,
    data_inicio DATETIME NOT NULL,
    data_fim DATETIME NOT NULL`;

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM disponibilidade;`;

  static sql_SelectOne = `
    SELECT * 
    FROM disponibilidade
    WHERE disponibilidade.id_disponibilidade = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}
