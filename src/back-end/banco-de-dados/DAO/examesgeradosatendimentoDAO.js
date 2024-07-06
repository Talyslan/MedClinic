import { tableDAO } from "./superclasse/tableDAO.js";

export class ExamesGeradosAtendimentoDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `exames_gerados_atendimento`;
  static sql_especificacoesTabela = `
    id_paciente INT NOT NULL,
    id_medico INT NOT NULL,
    id_exame INT NOT NULL
    PRIMARY KEY (id_paciente, id_medico, id_exame),

    FOREIGN KEY (id_exame) REFERENCES exame(id_exame),
    FOREIGN KEY (id_paciente) REFERENCES paciente(id),
    FOREIGN KEY (id_medico) REFERENCES medico(id)`;

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM exames_gerados_atendimento;`;

  static sql_SelectOne = `
    SELECT * 
    FROM exames_gerados_atendimento
    WHERE exames_gerados_atendimento.id_paciente = ? and
    exames_gerados_atendimento.id_medico = ? and 
    exames_gerados_atendimento.id_exame = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}
