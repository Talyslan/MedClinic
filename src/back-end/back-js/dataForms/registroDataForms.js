import { Paciente } from "../classes/paciente.js";
import { Medico } from "../classes/medico.js";

class SubmissaoInForm {
  constructor() {
    this.formDataObject = {};
  }
  
  fecharAba(idElmt) {
    let idElement = document.getElementById(idElmt);
    if (idElement) {
      idElement.style.display = "none";
    } 
    else {
      console.error(`Elemento com id '${idElmt}' não encontrado.`);
    }
  }

  abrirAba(idElmt) {
    let idElement = document.getElementById(idElmt);
    if (idElement) {
      idElement.style.display = "flex";
    } 
    else {
      console.error(`Elemento com id '${idElmt}' não encontrado.`);
    }
  }
  
  addBlur(idElmt) {
    let idElement = document.getElementById(idElmt);
    if (idElement) {
      idElement.classList.add("blur");
    } 
    else {
      console.error(`Element with id '${idElmt}' not found.`);
    }
  }
  
  removeBlur(idElmt) {
    let idElement = document.getElementById(idElmt);
    if (idElement) {
      idElement.classList.remove("blur");
    } 
    else {
      console.error(`Element with id '${idElmt}' not found.`);
    }
  }

  // Este método cria o obj Paciente
  async pacienteClicado(obj) {
    // pega apenas as propriedades necessarias que vem do obj e insere em paciente (removi senhaconfirm, isso vai ser verificado no front)
    const PacienteCriado = new Paciente(obj.nome, obj.senha, obj["data-nascimento"], obj.cpf, obj.email);
    
    const urlAPI_paciente = `http://localhost:3000/adicionarPaciente`;

    try {
      const response = await fetch(urlAPI_paciente, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(PacienteCriado.getData())
      });

      if (!response.ok) {
        throw new Error("Erro ao adicionar paciente");
      }

      //vai para tela de login assim que registra
      window.location.href = "../../../pages/login.html";
    }
    catch (error) {
      console.error("Erro:", error);
      location.reload();
    }
  }

  // Este método cria o obj Médico
  async medClicado(obj) {
    this.abrirAba('finalizar-conta-med')
    
    // Cria-se um objeto Médico
    const MedicoCriado = new Medico(obj.nome, obj.senha, obj["data-nascimento"], obj.cpf, obj.email);

    // assiste o forms do medico (colocar crm e especializacao)
    const formMed = document.getElementById("formMed");

    formMed.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Cria-se um obj com as infos extra de Médico
      const formData = new FormData(event.target);
      const formDataObject = {}
      formData.forEach((value, key) => formDataObject[key] = value);

      // Adiciona-se o crm e a especialização do obj formDataObject dentro de Médico
      MedicoCriado.setEspecializacao(formDataObject.especializacao)
      MedicoCriado.setCrm(formDataObject.crm);

      // requisição para a api
      const urlAPI_medico = "http://localhost:3000/adicionarMedico";

      try {
        const response = await fetch(urlAPI_medico, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(MedicoCriado.getData())
        });

        if (!response.ok) {
          throw new Error("Erro ao adicionar medico");
        }

        // vai para o login 
        window.location.href = '../../../pages/login.html';
      }
      catch (error) {
        console.error("Erro: ", error.stack);
      }
    });
  }

  // Esse Método salva os dados do primeiro formulário
  submitPrimario(event) {
    event.preventDefault();

    // pega dados do forms e adiciona em formDataObject
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => formDataObject[key] = value);

    // mostra as opçoes de medico ou paciente e da blur no fundo
    const qualUser = document.getElementById("qual-user");
    qualUser.style.display = "flex";

    this.addBlur('lado-design');
    this.addBlur('lado-form');

    // assiste se clicou em paciente
    const userPac = document.getElementById("userPac");
    userPac.addEventListener("click", () => {
      this.fecharAba('qual-user');
      this.pacienteClicado(formDataObject);
    });

    // assiste se clicou em médico
    const userMed = document.getElementById("userMed");
    userMed.addEventListener("click", () => {
      this.fecharAba('qual-user');
      this.medClicado(formDataObject);
    });
  }
}

// Executando...
const subimissaoInFormObject = new SubmissaoInForm();

const formPrimario = document.getElementById("formPrimario");
// assiste o form que preenche a tabela pessoa
formPrimario.addEventListener("submit", (event) => {
  subimissaoInFormObject.submitPrimario(event)
});

// assiste os closers para fechar as abas
const close = document.getElementById('close');
close.addEventListener('click', () => {
  subimissaoInFormObject.fecharAba('qual-user');
  subimissaoInFormObject.removeBlur('lado-design');
  subimissaoInFormObject.removeBlur('lado-form');
})

const close2 = document.getElementById('close2');
close2.addEventListener('click', () => {
  subimissaoInFormObject.fecharAba('finalizar-conta-med');
  subimissaoInFormObject.removeBlur('lado-design');
  subimissaoInFormObject.removeBlur('lado-form');
});
