class Pessoa{
    constructor(id, nome, senha, data_nasc, cpf, email){
        this._id = id;
        this._nome = nome;
        this._senha = senha;
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

export default Pessoa;