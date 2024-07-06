import { tableDAO } from "./superclasse/tableDAO.js";

export class RelatorioDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `relatorio`;
  static sql_especificacoesTabela = `
    id_relatorio INT AUTO_INCREMENT PRIMARY KEY,
    diagnostico VARCHAR(50),
    tratamento VARCHAR(50)`;

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM relatorio;`;

  static sql_SelectOne = `
    SELECT * 
    FROM relatorio
    WHERE relatorio.id_relatorio = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}
