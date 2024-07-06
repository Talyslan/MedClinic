import { Pessoa } from './superclasse/pessoa.js';

export class Medico extends Pessoa {
    constructor(nome, senha, senha_confirm, data_nasc, cpf, email, especializacao, crm) {
        super(nome, senha, senha_confirm, data_nasc, cpf, email);
        this._especializacao = especializacao;
        this._crm = crm;
        this._valorConsulta = undefined;
        this._imagem = undefined;
        this._horasDisponiveis = [];
    };
};
