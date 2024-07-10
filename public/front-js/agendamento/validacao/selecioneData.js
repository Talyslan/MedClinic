import {
  addActive,
  addDisabled,
  removeActive,
  removeDisabled,
} from "../../funções-auxiliares/funcoesAuxiliares.js";

// handle
// verifica se esta selecionado e adiciona o active (background verde)
const isSelected = ({ target }) => {
  const data = document.querySelector("#data");
  const selectHora = document.querySelector("#hora");
  const horaItens = document.querySelectorAll(".horaItem");


  // remove active de se ele tiver
  removeActive(data);
  addDisabled(selectHora);
  horaItens.forEach(btn => addDisabled(btn))
  
  // se nao tiver selecionado, ele para aqui
  if (!target.value) return;
  
  // selecionado: background verde
  addActive(data);
  removeDisabled(selectHora);
  horaItens.forEach(btn => removeDisabled(btn))
};

const mainClick = ({ target }) => {
  const data = document.querySelector("#data");

  if (target.id === "data") {
    data.addEventListener("input", isSelected);
  }
};

// select
const main = document.querySelector("main");

// event
// colocando evento no main pois é o unico um elemento que nao altera dentro do html
// delegaçao de eventos
main.addEventListener("click", mainClick);
