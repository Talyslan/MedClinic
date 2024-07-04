import { Paciente } from '../classes/paciente.js'

function pacienteClicado(obj) {
    const PacienteCriado = new Paciente();

    //nome, senha, senha_confirm, data_nasc, cpf, email

    console.log(PacienteCriado)
}

function medClicado() {}


function submitPrimario(event) {
    event.preventDefault();
    console.log(event)
    
    const formData = new FormData(event.target);
    
    const formDataObject = {};
    
    formData.forEach((value, key) => formDataObject[key] = value);
    
    console.log(formDataObject);

    const [imgPaciente, imgMedico] = document.querySelectorAll(".userItem")

    pacienteClicado(formDataObject)

    // imgPaciente.addEventListener('click', () => pacienteClicado(obj));
    // imgMedico.addEventListener('click', () => medClicado(obj))

};


const formPrimario = document.getElementById('formPrimario');

formPrimario.addEventListener('submit', submitPrimario);
