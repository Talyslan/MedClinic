import { PessoaDAO } from "./pessoaDAO.js";

export class MedicoDAO extends PessoaDAO {
  // sql para criação da tabela
  static sql_nomeTabela = `medico`
  static sql_especificacoesTabela = `
    id INT NOT NULL PRIMARY KEY,
    especializacao VARCHAR(255) NOT NULL,
    crm VARCHAR(255) NOT NULL,
    valorConsulta INT NOT NULL,
	  FOREIGN KEY (id) REFERENCES pessoa(id)`;
  
  // sql para consultas
  static sql_SelectAll = `
    SELECT * 
    FROM pessoa, medico
    WHERE pessoa.id = medico.id;`;

  static sql_SelectOne = `
    SELECT * 
    FROM medico, pessoa
    WHERE medico.id = pessoa.id 
    and medico.id = ?;`;

  constructor(conexaoExistente) {
    super(conexaoExistente);
  }
}
