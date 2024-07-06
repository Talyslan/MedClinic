import { tableDAO } from "./superclasse/tableDAO.js";

export class ExameDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `exame`;
  static sql_especificacoesTabela = `
    id_exame INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    valor INT NOT NULL`;

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM exame;`;

  static sql_SelectOne = `
    SELECT * 
    FROM exame
    WHERE exame.id_exame = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}
