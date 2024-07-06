import { tableDAO } from "./superclasse/tableDAO.js";

export class TelefoneDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `telefone`;
  static sql_especificacoesTabela = `
    id INT AUTO_INCREMENT NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    PRIMARY KEY (id, telefone),
    FOREIGN KEY (id) REFERENCES pessoa(id)`;

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM telefone;`;

  static sql_SelectOne = `
    SELECT * 
    FROM telefone
    WHERE telefone.id = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}
