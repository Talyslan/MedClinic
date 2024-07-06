import { tableDAO } from "./superclasse/tableDAO.js";

export class ConsultaDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `consulta`;
  static sql_especificacoesTabela = `
    id_consulta INT AUTO_INCREMENT PRIMARY KEY,
    data_hora DATETIME,
    status INT NOT NULL,
    VALOR INT NOT NULL,
    id_paciente INT,
    id_medico INT,
    id_relatorio INT,

    FOREIGN KEY (id_paciente) REFERENCES paciente(id),
    FOREIGN KEY (id_medico) REFERENCES paciente(id),
    FOREIGN KEY (id_relatorio) REFERENCES paciente(id_relatorio),
    
    `

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM consulta;`;

  static sql_SelectOne = `
    SELECT * 
    FROM consulta
    WHERE consulta.id_consulta = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}
