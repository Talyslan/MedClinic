import {
  addActive,
  handleActiveBtn,
  removeActive,
} from "../../funções-auxiliares/funcoesAuxiliares.js";

// handle
// verifica se esta selecionado e adiciona o active (background verde)
const isSelected = ({ target }) => {
  const pagamento = document.querySelector("#pagamento");

  // remove active de se ele tiver
  removeActive(pagamento);

  // atualiza btn se necessario
  handleActiveBtn();

  // se nao tiver selecionado, ele para aqui
  if (!target.value) return;

  // selecionado: background verde
  addActive(pagamento);

  // atualiza btn se necessario
  handleActiveBtn();
};

const mainClick = ({ target }) => {
  const pagamento = document.querySelector("#pagamento");
  
  if (target.id === 'pagamento') {
    pagamento.addEventListener("change", isSelected);
  }
};

// select
const main = document.querySelector("main");

// event
// colocando evento no main pois é o unico um elemento que nao altera dentro do html
// delegaçao de eventos
main.addEventListener("click", mainClick);
