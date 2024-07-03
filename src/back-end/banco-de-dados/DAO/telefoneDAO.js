import { tableDAO } from "./superclasse/tableDAO.js";

export class TelefoneDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `telefone`;
  static sql_especificacoesTabela = `
    id INT NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    PRIMARY KEY (id, telefone),
    FOREIGN KEY (id) REFERENCES pessoa(id)`;

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM pessoa;`;

  static sql_SelectOne = `
    SELECT * 
    FROM medico, pessoa
    WHERE medico.id = pessoa.id 
    and medico.id = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}
