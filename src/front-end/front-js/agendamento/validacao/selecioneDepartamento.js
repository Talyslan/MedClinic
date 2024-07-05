import {
  addActive,
  handleActiveBtn,
  removeActive,
} from "../../funções-auxiliares/btnActive&classActive.js";

// handle
// verifica se departamento esta selecionado e adiciona o active (background verde)
const isSelected = ({ target }) => {
  const especializacaoSelect = document.querySelector("#especializacao");

  // remove active de especializacao se ele tiver
  removeActive(especializacaoSelect);

  // atualiza btn se necessario
  handleActiveBtn();

  // se nao tiver departamento selecionado, ele para aqui
  if (!target.value) return;

  // departamento selecionado: background verde
  addActive(especializacaoSelect);

  // atualiza btn se necessario
  handleActiveBtn();
};

// select
const especializacaoSelect = document.querySelector("#especializacao");

// event
if (especializacaoSelect) {
  especializacaoSelect.addEventListener("change", isSelected);
}
