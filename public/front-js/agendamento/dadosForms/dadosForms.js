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
    if (main) {
      main.addEventListener("click", this.handleMainClick.bind(this));
    }
  }

  handleMainClick({ target }) {
    // delegação de eventos
    if (target.closest(".btn.selecionarDep")) {
      const form = document.querySelector("form");
      if (form) {
        form.addEventListener("submit", this.handleFormSelecionaDep.bind(this));
      }
    }
  }

  async handleFormSelecionaDep(event) {
    event.preventDefault();

    const id_paciente = 2;
    this.setAtributoData("id_paciente", id_paciente);

    // formData para pegar todos os dados do forms
    const formData = new FormData(event.target);
    // adicionando dados
    formData.forEach((value, key) => this.setAtributoData(key, value));

    // Selecionar todos os elementos h3 dentro de .itemProfissional .content .up
    const nomeMedHTML = document.querySelectorAll(
      ".itemProfissional .content .up h3"
    );

    // Converter a NodeList em um array
    const nomeMedArray = Array.from(nomeMedHTML);

    // Filtrar os elementos que têm o mesmo texto que this._data.profissional
    const filteredNames = nomeMedArray.filter(
      (nome) => nome.textContent === this._data.profissional
    );

    if (filteredNames.length > 0) {
      const idMedico = filteredNames[0].closest(".itemProfissional").id;

      console.log("id do medico: ", idMedico);

      this.setAtributoData("id_medico", idMedico);

      console.log("um: ", this._data);

      const medicoSelecionado = await this.getMedicoSelecionado(this._data.id_medico);
      this.setAtributoData("valorConsulta", medicoSelecionado.valorConsulta);

      console.log(medicoSelecionado);

      this.updateSection(
        "#selecione-departamento",
        sections["selecione_datahora"](medicoSelecionado)
      );

      // form do selecionar data, hora e forma de pagamento
      const form = document.querySelector("form");
      if (form) {
        form.addEventListener(
          "submit",
          this.handleFormSelecionaDataHoraPagamento.bind(this)
        );
      }
    } else {
      console.error("Nenhum médico correspondente encontrado.");
    }
  }

  handleFormSelecionaDataHoraPagamento(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.forEach((value, key) => this.setAtributoData(key, value));
    console.log("dois: ", this._data);

    this.updateSection(
      "#selecione-datahora",
      sections["confirmar_dados"](this._data)
    );

    this.inicializeConfirmationButtons();
  }

  async getMedicoSelecionado(idMed) {
    try {
      const response = await fetch(`http://localhost:3000/medicos/${idMed}`);

      if (!response.ok) {
        throw new Error(`Erro ao buscar medico com id ${idMed}`);
      }

      const medico = await response.json();
      return medico[0];
    } catch (err) {
      console.error("Erro ao buscar medico:", err);
      return null;
    }
  }

  updateSection(selector, newContent) {
    const section = document.querySelector(selector);
    if (section) {
      const main = document.querySelector("main");
      if (main) {
        alterarElementos(section, main, newContent);
      }
    }
  }

  inicializeConfirmationButtons() {
    const btnConfirmar = document.querySelector("#confirmar");
    const btnCancelar = document.querySelector("#cancelar");

    if (btnConfirmar) {
      btnConfirmar.addEventListener("click", this.confirmarClicked.bind(this));
    }
    if (btnCancelar) {
      btnCancelar.addEventListener("click", this.cancelarClicked.bind(this));
    }
  }

  cancelarClicked() {
    window.location.href = "/painel-pac-consultas";
  }

  async confirmarClicked() {
    try {
      const response = await fetch("http://localhost:3000/adicionarAgendamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this._data),
      });

      if (!response.ok) {
        throw new Error("Erro ao adicionar agendamento");
      }

      const result = await response.json();
      console.log("Agendamento adicionado com sucesso:", result);

      // Redirecionar ou fornecer feedback ao usuário
      window.location.href = "/painel-pac-consultas";
    } catch (err) {
      console.error("Erro ao adicionar agendamento:", err);
    }
  }
}

// iniciar o manipulador
new ManipuladorForm();
