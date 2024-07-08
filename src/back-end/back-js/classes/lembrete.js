export class Lembrete {
    constructor(id_lembrete, data_envio, titulo, mensagem, id_paciente) {
        this._id_lembrete = id_lembrete;
        this._data_envio = data_envio;
        this._titulo = titulo;
        this._mensagem = mensagem;
        this._id_paciente = id_paciente;
    }

    getDado(tipoDado){
        return this[tipoDado];
    }

    setDado(tipoDado, valorDado){
        this[tipoDado] = valorDado;
    }
}


