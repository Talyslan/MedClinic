import {
  addActive,
  removeActive,
  handleActiveBtn,
} from "../../funções-auxiliares/funcoesAuxiliares.js";

// funcoes auxiliares
const getNomeProfissional = (profissional) => profissional.querySelector(".content .up h3").textContent;

// handle
const itemProfissionalActive = ({ target }) => {
  // pega input do lado esquerdo
  const selectProfissional = document.querySelector("#profissional");
  // pega card de profissional que foi clicado
  const profissional = target.closest(".itemProfissional");
  const nomeProfissional = getNomeProfissional(profissional);
  // pega todos os profissionais e recebe um array
  const itensProfissional = document.querySelectorAll(".itemProfissional");

  // remove a classe active de todos para nao ter mais de um selecionado
  itensProfissional.forEach((item) => removeActive(item));
  // remove o active de selectProfissional
  removeActive(selectProfissional);
  // atualiza btn se necessario
  handleActiveBtn();

  if (!profissional) return;

  // profissional selecionado, select e profissional active.
  addActive(profissional);
  addActive(selectProfissional);

  selectProfissional.value = nomeProfissional;

  // atualiza btn se necessario
  handleActiveBtn();
};


const medicoEscolhidoSelect = ({ target }) => {
  // pega o select do lado esquerdo
  const selectProfissional = document.querySelector("#profissional");
  // pega todos os profissionais e recebe um array
  const itensProfissional = document.querySelectorAll(".itemProfissional");
  
  // remove a classe active de todos para nao ter mais de um selecionado
  itensProfissional.forEach((item) => {
    getNomeProfissional(item) === target.value ? addActive(item) : removeActive(item);
  });
  
  // remove o active de selectProfissional
  removeActive(selectProfissional);

  // atualiza btn se necessario
  handleActiveBtn();
  
  if (!target.value) return;

  addActive(selectProfissional);

  // atualiza btn se necessario
  handleActiveBtn();
}

const mainClick = ({ target }) => {

  // selectors
  const boxProfissionais = document.querySelector("#boxProfissionais");
  const selectProfissional = document.querySelector("#profissional");

  if (target.closest(".itemProfissional")) {
    boxProfissionais.addEventListener("click", itemProfissionalActive);
  }

  if (target.id === "profissional") {
    selectProfissional.addEventListener("change", medicoEscolhidoSelect);
  }
};

// select
const main = document.querySelector("main");

// event
// colocando evento no main pois é o unico um elemento que nao altera dentro do html
// delegaçao de eventos
main.addEventListener("click", mainClick);