import { Pessoa } from './superclasse/pessoa.js';

export class Paciente extends Pessoa {
    constructor(nome, senha, senha_confirm, data_nasc, cpf, email) {
        super(nome, senha, senha_confirm, data_nasc, cpf, email);
    };
};
