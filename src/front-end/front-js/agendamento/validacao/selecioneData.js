import {
  addActive,
  handleActiveBtn,
  removeActive,
} from "../../funções-auxiliares/btnActive&classActive.js";

// handle
// verifica se esta selecionado e adiciona o active (background verde)
const isSelected = ({ target }) => {
  const data = document.querySelector("#data");

  // remove active de se ele tiver
  removeActive(data);

  // atualiza btn se necessario
  handleActiveBtn();

  // se nao tiver selecionado, ele para aqui
  if (!target.value) return;

  // selecionado: background verde
  addActive(data);

  // atualiza btn se necessario
  handleActiveBtn();
};

// select
const data = document.querySelector("#data");

// event
if (data) {
    data.addEventListener("change", isSelected);
}
