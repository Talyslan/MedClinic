import { alterarElementos } from "../../funções-auxiliares/funcoesAuxiliares.js";
import { sections } from "./codigoPaginas.js";

class ManipuladorForm {
  constructor() {
    this._data = {};
    
    this.inicializarEventListeners();
  }

  // set
  setAtributoData(prop, valor) {
    this._data[prop] = valor;
  }

  inicializarEventListeners() {
    const main = document.querySelector("main");
    main.addEventListener("click", this.handleMainClick.bind(this));
  }

  handleMainClick({ target }) {
    // delegação de eventos
    if (target.closest(".btn.selecionarDep")) {
      const form = document.querySelector("form");
      form.addEventListener("submit", this.handleFormSelecionaDep.bind(this));
    }
  }

  handleFormSelecionaDep(event) {
    event.preventDefault();

    // formData para pegar todos os dados do forms
    const formData = new FormData(event.target);
    // adicionando dados
    formData.forEach((value, key) => this.setAtributoData(key, value));

    console.log("um: ", this._data);

    const medicoSelecionado = this.getMedicoSelecionado();
    this.setAtributoData('valorConsulta', medicoSelecionado.valorConsulta)

    this.updateSection("#selecione-departamento", sections["selecione_datahora"](medicoSelecionado));

    // form do selecionar data, hora e forma de pagamento
    const form = document.querySelector("form");
    form.addEventListener(
      "submit",
      this.handleFormSelecionaDataHoraPagamento.bind(this)
    );
  }

  handleFormSelecionaDataHoraPagamento(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.forEach((value, key) => this.setAtributoData(key, value));
    console.log("dois: ", this._data);

    this.updateSection("#selecione-datahora", sections["confirmar_dados"](this._data));

    this.inicializeConfirmationButtons();
  }

  getMedicoSelecionado() {
    return {
      nome: "Dra. Maria Silva",
      especialidade: "Cardiologia",
      imagem: "../main-page/background-hero.jpg",
      valorConsulta: "300,00",
      horasDisponiveis: ["10:00", "13:00", "15:00"],
    };
  }

  updateSection(selector, newContent) {
    const section = document.querySelector(selector);

    const main = document.querySelector("main");
    alterarElementos(section, main, newContent);
  }

  inicializeConfirmationButtons() {
    const btnConfirmar = document.querySelector("#confirmar");
    const btnCancelar = document.querySelector("#cancelar");

    btnConfirmar.addEventListener("click", this.confirmarClicked.bind(this));
    btnCancelar.addEventListener("click", this.cancelarClicked.bind(this));
  }

  cancelarClicked() {
    window.location.href = "./index.html";
  }

  confirmarClicked() {
    // chamada da API para inserir agendamento
  }
}

// iniciar o manipulador
new ManipuladorForm();
