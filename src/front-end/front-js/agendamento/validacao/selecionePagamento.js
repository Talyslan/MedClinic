import {
  addActive,
  handleActiveBtn,
  removeActive,
} from "../../funções-auxiliares/btnActive&classActive.js";

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

// select
const pagamento = document.querySelector("#pagamento");

// event
if (pagamento) {
  pagamento.addEventListener("change", isSelected);
}
