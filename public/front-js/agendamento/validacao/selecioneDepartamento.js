import {
  addActive,
  removeActive,
} from "../../funções-auxiliares/funcoesAuxiliares.js";

import { mostreProfissionaisDisponiveis } from "../../inserirHtml/agendamento.js";

// handle
const mudancaEspecializacao = ({ target }) => {
  const especializacaoSelect = document.querySelector("#especializacao");

  // remove active de especializacao se ele tiver
  removeActive(especializacaoSelect);

  // verifica se mostra ou n mostra e se habilita ou n habilita o campo de selecionar profissionais
  mostreProfissionaisDisponiveis(target.value);

  // se nao tiver departamento selecionado, ele para aqui
  if (!target.value) return;

  // verifica se mostra ou n mostra e se habilita ou n habilita o campo de selecionar profissionais
  mostreProfissionaisDisponiveis(target.value);

  // departamento selecionado: background verde
  addActive(especializacaoSelect);
};

const mainClick = ({ target }) => {
  // Verifica se o clique foi no elemento de especialização
  if (target.id === "especializacao") {
    // Adiciona o evento de mudança ao seletor de especialização
    const especializacaoSelect = document.querySelector("#especializacao");
    especializacaoSelect.addEventListener("change", mudancaEspecializacao);
  }
};

// select
const main = document.querySelector("main");

// event
// colocando evento no main pois é o unico um elemento que nao altera dentro do html
// delegaçao de eventos
main.addEventListener("click", mainClick);
