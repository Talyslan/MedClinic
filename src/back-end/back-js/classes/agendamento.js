class Agendamento {
    constructor(departamento, profissional, data, hora, formaPagamento) {
        this._departamento = departamento;
        this._profissional = profissional;
        this._data = data;
        this._hora = hora;
        this._formaPagamento = formaPagamento;
    }

    // Métodos getter
    getDepartamento() {
        return this._departamento;
    }

    getProfissional() {
        return this._profissional;
    }

    getData() {
        return this._data;
    }

    getHora() {
        return this._hora;
    }

    getFormaPagamento() {
        return this._formaPagamento;
    }
    
    detalhes() {
        return `
            Departamento: ${this._departamento}
            Profissional: ${this._profissional}
            Data: ${this._data}
            Hora: ${this._hora}
            Forma de Pagamento: ${this._formaPagamento}
        `;
    }
}