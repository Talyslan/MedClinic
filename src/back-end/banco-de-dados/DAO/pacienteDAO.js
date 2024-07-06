import { PessoaDAO } from "./pessoaDAO.js";

export class PacienteDAO extends PessoaDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `paciente`
  static sql_especificacoesTabela = `
    id INT NOT NULL PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES pessoa(id)`;

  // sql para consultas
  static sql_SelectAll = `
    SELECT * 
    FROM pessoa, paciente
    WHERE pessoa.id = paciente.id;`;

  static sql_SelectOne = `
    SELECT * 
    FROM paciente, pessoa
    WHERE paciente.id = pessoa.id 
    and paciente.id = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}


