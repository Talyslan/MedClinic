import { Pessoa } from "./pessoa.js";

export class Paciente extends Pessoa {
  constructor(nome, senha, data_nasc, cpf, email) {
    super(nome, senha, data_nasc, cpf, email);
  }

  getData() {
    return {
      nome: this._nome,
      senha: this._senha,
      data_nasc: this._data_nasc,
      cpf: this._cpf,
      email: this._email,
    };
  }
}
