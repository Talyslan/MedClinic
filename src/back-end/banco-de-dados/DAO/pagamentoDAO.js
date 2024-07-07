import { tableDAO } from "./superclasse/tableDAO.js";

export class PagamentoDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `pagamento`;
  static sql_especificacoesTabela = `
    id INT AUTO_INCREMENT PRIMARY KEY,
    status ENUM('concluido', 'pendente') NOT NULL,
    forma ENUM('dinheiro', 'pix') NOT NULL,
    data_hora_realizado DATETIME NOT NULL,
    data_vencimento DATE NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    banco VARCHAR(20) NOT NULL,
    id_agendamento INT NOT NULL,
    id_paciente INT NOT NULL,
    FOREIGN KEY (id_agendamento) REFERENCES agendamento(id),
    FOREIGN KEY (id_paciente) REFERENCES paciente(id)`;

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