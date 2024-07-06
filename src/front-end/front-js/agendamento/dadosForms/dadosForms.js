import { alterarElementos } from "../../funções-auxiliares/funcoesAuxiliares.js";
import { sections } from "./codigoPaginas.js";

// Pegando os dados e passando para um objeto
let DATAformSelecionaDep = {};

// Handle para o formulário de seleção de data, hora e pagamento
const formSelecionaDataHoraPagamento = (event) => {

  const cancelarClicked = () => window.location.href = '../index.html';

  const confirmarClicked = () => {
    // taca na api
  }

  event.preventDefault();

  const formSelecionaDataHora = new FormData(event.target);

  // Adicionando os dados ao objeto
  formSelecionaDataHora.forEach((value, key) => (DATAformSelecionaDep[key] = value));

  console.log('dois: ', DATAformSelecionaDep);
  
  const selecione_datahora = document.querySelector("#selecione-datahora");
  const main = document.querySelector("main");

  alterarElementos(
    selecione_datahora,
    main,
    sections["confirmar_dados"](DATAformSelecionaDep)
  );

  // selector
  const btnConfirmar = document.querySelector("#confirmar");
  const btnCancelar = document.querySelector("#cancelar");

  // event
  btnConfirmar.addEventListener("click", confirmarClicked)
  btnCancelar.addEventListener("click", cancelarClicked)
};

// Handle para o formulário de seleção de departamento
const formSelecionaDep = (event) => {
  // Previne o evento de submissão padrão
  event.preventDefault();

  // Coloca os dados do formulário em um objeto
  const formSelecionaDep = new FormData(event.target);

  // Adicionando os dados ao objeto
  formSelecionaDep.forEach((value, key) => (DATAformSelecionaDep[key] = value));
  
  console.log('um: ', DATAformSelecionaDep);

  // Section selecione-departamento
  const selecione_departamento = document.querySelector("#selecione-departamento");
  const main = document.querySelector("main");
  
  // Pegar o médico selecionado no banco
  const medicoSelecionado = {
    nome: "Dra. Maria Silva",
    especialidade: "Cardiologia",
    imagem: "../public/main-page/background-hero.jpg",
    valorConsulta: "300,00",
    horasDisponiveis: ["10:00", "13:00", "15:00"],
  };

  DATAformSelecionaDep.valorConsulta = medicoSelecionado.valorConsulta;

  // selecione_departamento desaparece e no main coloco a nova section
  alterarElementos(
    selecione_departamento,
    main,
    sections["selecione_datahora"](medicoSelecionado)
  );

  // Adiciona o evento de submissão para o próximo formulário
  const formSelecionaDataHoraHTML = document.querySelector("form");
  formSelecionaDataHoraHTML.addEventListener("submit", formSelecionaDataHoraPagamento);
};

// Handle para clique no main
const mainClick = ({ target }) => {
  const formSelecionaDepHTML = document.querySelector("form");
  
  if (target.closest(".btn.selecionarDep")) {
    formSelecionaDepHTML.addEventListener("submit", formSelecionaDep);
  }
};

// Select
const main = document.querySelector("main");

// Event
// Colocando evento no main pois é o único elemento que não altera dentro do HTML
// Delegação de eventos
main.addEventListener("click", mainClick);
