import Pessoa from './pessoa';

class Medico extends Pessoa{
    constructor(){};
    super(especializacao, crm){
        this._especializacao = especializacao;
        this._crm = crm;
    }
};

export default Paciente;