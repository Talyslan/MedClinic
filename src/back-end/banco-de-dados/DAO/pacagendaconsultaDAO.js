import { tableDAO } from "./superclasse/tableDAO.js";

export class PacAgendaConsultaDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `pac_agenda_consulta`;
  static sql_especificacoesTabela = `
    id_agendamento INT NOT NULL,
    id_paciente INT NOT NULL,
    id_medico INT,

    PRIMARY KEY (id_agendamento, id_paciente),
    FOREIGN KEY (id_paciente) REFERENCES paciente(id),
    FOREIGN KEY (id_medico) REFERENCES medico(id)`;

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM pac_agenda_consulta;`;

  static sql_SelectOne = `
    SELECT * 
    FROM pac_agenda_consulta
    WHERE pac_agenda_consulta.id_paciente = ? and
    pac_agenda_consulta.id_agendamento = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}
