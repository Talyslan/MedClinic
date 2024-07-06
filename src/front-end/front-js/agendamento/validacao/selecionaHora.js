import {
  addActive,
  addDisabled,
  removeActive,
  removeDisabled,
} from "../../funções-auxiliares/funcoesAuxiliares.js";

// handle
const horaActive = ({ target }) => {
  const selectHora = document.querySelector("#hora");
  const btnHoraSelecionado = target.closest(".horaItem");
  const horaItens = document.querySelectorAll(".horaItem");

  const pagamento = document.querySelector("#pagamento");
  
  // remove a classe active de todos para nao ter mais de um selecionado
  horaItens.forEach((item) => removeActive(item));

  addDisabled(pagamento);
  removeActive(selectHora);
  
  if (!btnHoraSelecionado) return;
  
  // profissional selecionado, input active.
  addActive(btnHoraSelecionado);
  addActive(selectHora);
  selectHora.value = btnHoraSelecionado.innerHTML;
  removeDisabled(pagamento);
};

const mudancaSelectHora = ({ target }) => {
  // select, lista dos btn de hora, valor selecionado no select
  const selectHora = document.querySelector("#hora");
  const horaItens = document.querySelectorAll(".horaItem");
  const horaSelecionada = target.value;
  
  const pagamento = document.querySelector("#pagamento");
  
  removeActive(selectHora);
  addDisabled(pagamento);
  
  horaItens.forEach((hora) => {
    hora.innerHTML === horaSelecionada ? addActive(hora) : removeActive(hora);
  });
  
  if (!target.value) return;
  
  addActive(selectHora);
  removeDisabled(pagamento);
};

const mainClick = ({ target }) => {
  const boxHorarios = document.querySelector("#boxHorarios");
  const selectHora = document.querySelector("#hora");

  if (target.closest(".horaItem")) {
    boxHorarios.addEventListener("click", horaActive);
  }

  if (target.id === "hora") {
    selectHora.addEventListener("change", mudancaSelectHora);
  }
};

// select
const main = document.querySelector("main");

// event
// colocando evento no main pois é o unico um elemento que nao altera dentro do html
// delegaçao de eventos
main.addEventListener("click", mainClick);
