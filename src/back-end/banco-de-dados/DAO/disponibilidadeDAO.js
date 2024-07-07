import { tableDAO } from "./superclasse/tableDAO.js";

export class DisponibilidadeDAO extends tableDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `disponibilidade`;
  static sql_especificacoesTabela = `
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_medico INT,
    hora_inicio TIME NOT NULL,
    status ENUM('disponível', 'indisponível') NOT NULL,
    FOREIGN KEY (id_medico) REFERENCES medico(id_medico),
    UNIQUE (id_medico, hora_inicio)`;

  // variaveis sql para consultas
  static sql_SelectAll = `SELECT * FROM disponibilidade;`;

  // static sql_SelectOne = `
  //   SELECT * 
  //   FROM disponibilidade
  //   WHERE disponibilidade.id = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}
