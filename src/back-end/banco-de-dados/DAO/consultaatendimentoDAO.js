import { tableDAO } from "./superclasse/tableDAO.js";

export class ConsultaAtendimentoDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `consulta_atendimento`;
  static sql_especificacoesTabela = `
    id_paciente INT NOT NULL,
    id_medico INT NOT NULL,
    id_relatorio INT NOT NULL
    PRIMARY KEY (id_paciente, id_medico),
    FOREIGN KEY (id_relatorio) REFERENCES relatorio(id)`;

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM consulta_atendimento;`;

  static sql_SelectOne = `
    SELECT * 
    FROM consulta_atendimento
    WHERE consulta_atendimento.id_paciente = ? and 
    consulta_atendimento.id_medico = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}
