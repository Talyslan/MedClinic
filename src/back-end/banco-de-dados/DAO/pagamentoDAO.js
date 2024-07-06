import { tableDAO } from "./superclasse/tableDAO.js";

export class PagamentoDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `pagamento`;
  static sql_especificacoesTabela = `
    id_pagamento INT AUTO_INCREMENT PRIMARY KEY,
    status INT NOT NULL,
    forma INT NOT NULL,
    data_hora_realizado DATE NOT NULL,
    data_vencimento DATE NOT NULL,
    valor INT NOT NULL,
    banco VARCHAR(20) NOT NULL`;

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM pagamento;`;

  static sql_SelectOne = `
    SELECT * 
    FROM pagamento
    WHERE pagamento.id_pagamento = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}
