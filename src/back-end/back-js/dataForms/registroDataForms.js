import { Paciente } from '../classes/paciente.js'
import { Medico } from '../classes/medico.js'

class SubmissaoInForm {
    constructor() {
        this.formDataObject = {};
    }

    // Este método cria o obj Paciente
    async pacienteClicado(obj) {
        const PacienteCriado = new Paciente(
            obj.nome, obj.senha, obj['senha-confirmar'], obj['data-nascimento'], obj.cpf, obj.email
        );
        // console.log(PacienteCriado);

        const urlAPI_paciente = 'http://localhost:3000/adicionarPaciente'

        let PacienteCriadoJSON = undefined;
        delete PacienteCriado._senha_confirm
        PacienteCriadoJSON = PacienteCriado

        try {
            const response = await fetch(urlAPI_paciente, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: PacienteCriadoJSON
            });

            console.log(PacienteCriadoJSON)

            // console.log(JSON.stringify(PacienteCriado.getData()))
        
            if (!response.ok) {
                throw new Error('Erro ao adicionar paciente');
            }
        
            const data = await response.json();
        
            window.location.href = '../../../pages/login.html';
        } catch (error) {
            console.error('Erro:', error);
        }
        
    }

    // Este método cria o obj Médico
    async medClicado(obj) {
        // Cria-se um objeto Médico
        const MedicoCriado = new Medico(
            obj.nome, obj.senha, obj['senha-confirmar'], obj['data-nascimento'], obj.cpf, obj.email
        );
        // console.log(MedicoCriado);

        // Abre-se o formulário Med
        const abrirFormMed = function () {
            const finalizarContaMed = document.getElementById('finalizar-conta-med');
            finalizarContaMed.style.display = 'block';
        }
        abrirFormMed();

        const formMed = document.getElementById('formMed');
        formMed.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Cria-se um obj com as infos extra de Médico
            const formData = new FormData(event.target);

            formData.forEach((value, key) => this.formDataObject[key] = value);

            // console.log(this.formDataObject);

            // Adiciona-se o crm e a especialização do obj formDataObject dentro de Médico
            MedicoCriado._crm = this.formDataObject.crm;
            MedicoCriado._especializacao = this.formDataObject.especializacao;

            const finalizarContaMed = document.getElementById('finalizar-conta-med');
            finalizarContaMed.style.display = 'none';

            // console.log(MedicoCriado)
            const urlAPI_medico = 'http://localhost:3000/adicionarMedico'

            try {
                const response = await fetch(urlAPI_medico, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(MedicoCriado)
                });
    
                console.log(JSON.stringify(MedicoCriado))
            
                if (!response.ok) {
                    throw new Error('Erro ao adicionar medico');
                }
            
                const data = await response.json();
            
                // window.location.href = '../../../pages/login.html';
            } catch (error) {
                console.error('Erro:', error);
            }
        });
    }

    // Esse Método salva os dados do primeiro formulário 
    submitPrimario(event) {
        event.preventDefault();
        // console.log(event);

        const fecharAba = function () {
            const qualUser = document.getElementById('qual-user');
            qualUser.style.display = 'none';
        };

        const formData = new FormData(event.target);

        const formDataObject = {};

        formData.forEach((value, key) => formDataObject[key] = value);

        // console.log(formDataObject);

        const qualUser = document.getElementById('qual-user');
        qualUser.style.display = 'block';

        const userPac = document.getElementById('userPac');
        userPac.addEventListener('click', () => {
            fecharAba();
            this.pacienteClicado(formDataObject);
        });

        const userMed = document.getElementById('userMed');
        userMed.addEventListener('click', () => {
            fecharAba();
            this.medClicado(formDataObject);
        });
    }
}

// Executando
const subimissaoInFormObject = new SubmissaoInForm();

const formPrimario = document.getElementById('formPrimario');
formPrimario.addEventListener('submit', (event) => subimissaoInFormObject.submitPrimario(event));
