import { Paciente } from '../classes/paciente.js'
import { Medico } from '../classes/medico.js'

function pacienteClicado(obj) {
    const PacienteCriado = new Paciente(
        obj.nome, obj.senha, obj['senha-confirmar'], obj['data-nascimento'], obj.cpf, obj.email
    );

    console.log(PacienteCriado);

    window.location.href = '../../../pages/login.html';

}

function medClicado(obj) {
    const MedicoCriado = new Medico(
        obj.nome, obj.senha, obj['senha-confirmar'], obj['data-nascimento'], obj.cpf, obj.email
    );

    console.log(MedicoCriado);

    abrirFormMed()

    let formDataObject;

    const formMed = document.getElementById('formMed');
    formMed.addEventListener('submit', function(event) { 
        event.preventDefault();

        const formData = new FormData(event.target);

        const formDataObject = {};

        formData.forEach((value, key) => formDataObject[key] = value);

        console.log(formDataObject);

        MedicoCriado._crm = formDataObject.crm;
        MedicoCriado._especializacao = formDataObject.especializacao;

        formMed.addEventListener('submit', () => {
            const finalizarContaMed = document.getElementById('finalizar-conta-med');
            finalizarContaMed.style.display = 'none';
        });

        console.log(MedicoCriado)
        });
    };

function submitMed(event) {
    
};

//Essa função salva os dados do primeiro fomulário 
function submitPrimario(event) {
    event.preventDefault();
    console.log(event);

    const formData = new FormData(event.target);

    const formDataObject = {};

    formData.forEach((value, key) => formDataObject[key] = value);

    console.log(formDataObject);

    const qualUser = document.getElementById('qual-user');
    qualUser.style.display = 'block';

    let user = undefined;

    const userPac = document.getElementById('userPac');
    userPac.addEventListener('click', () => {
        fecharAba();
        pacienteClicado(formDataObject);
    });

    const userMed = document.getElementById('userMed');
    userMed.addEventListener('click', () => {
        fecharAba();
        medClicado(formDataObject);
    });
}

function fecharAba() {
    const qualUser = document.getElementById('qual-user');
    qualUser.style.display = 'none';
};

function abrirFormMed() {
    const finalizarContaMed = document.getElementById('finalizar-conta-med');
    finalizarContaMed.style.display = 'block';

};

const formPrimario = document.getElementById('formPrimario');
formPrimario.addEventListener('submit', submitPrimario);

const close = document.getElementById('close');
close.addEventListener('click', fecharAba);

