import { tableDAO } from "./superclasse/tableDAO.js";

export class AgendamentoDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `agendamento`;
  static sql_especificacoesTabela = `
    id INT AUTO_INCREMENT PRIMARY KEY,
    status ENUM('concluido', 'agendado', 'cancelado') NOT NULL,
    dataAgendamento DATE NOT NULL,
    hora TIME NOT NULL,
    id_medico INT NOT NULL,
    id_paciente INT NOT NULL,
    FOREIGN KEY (id_medico) REFERENCES medico(id),
    FOREIGN KEY (id_paciente) REFERENCES paciente(id)`;

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM agendamento;`;

  static sql_SelectOne = `
    SELECT * 
    FROM agendamento
    WHERE agendamento.id_paciente = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}