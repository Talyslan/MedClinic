import { Pessoa } from './superclasse/pessoa.js';

export class Medico extends Pessoa {
    constructor(nome, senha, data_nasc, cpf, email, especializacao, crm) {
        super(nome, senha, data_nasc, cpf, email);
        this._especializacao = especializacao;
        this._crm = crm;
        this._valorConsulta = undefined;
        this._imagem = undefined;
        this._horasDisponiveis = [];
    };

    // setters
    setEspecializacao(especializacao) {
        this._especializacao = especializacao;
    }

    setCrm(crm) {
        this._crm = crm
    }

    // getters
    getData() {
        return {
          nome: this._nome,
          senha: this._senha,
          data_nasc: this._data_nasc,
          cpf: this._cpf,
          email: this._email,
          especializacao: this._especializacao,
          crm: this._crm
        };
      }
};
