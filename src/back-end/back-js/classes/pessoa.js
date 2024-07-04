export class Pessoa {
    constructor(nome, senha, senha_confirm, data_nasc, cpf, email){
        this._nome = nome;
        this._senha = senha;
        this._senha_confirm = senha_confirm
        this._data_nasc = data_nasc;
        this._cpf = cpf;
        this._email = email;
    };

    setDado(tipoDado, dado){
        this[tipoDado] = dado;
    };

    getDado(tipoDado){
        return this[tipoDado];
    };
};