import {
  addActive,
  removeActive,
  handleActiveBtn,
} from "../../funções-auxiliares/btnActive&classActive.js";

// handle
const itemProfissionalActive = ({ target }) => {
  // pega card de profissional que foi clicado
  const profissional = target.closest(".itemProfissional");

  // pega todos os profissionais e recebe um array
  const itensProfissional = document.querySelectorAll(".itemProfissional");

  // pega input do lado esquerdo
  const inputProfissional = document.querySelector("#profissional");

  // remove a classe active de todos para nao ter mais de um selecionado
  itensProfissional.forEach((item) => removeActive(item));
  removeActive(inputProfissional);
  // atualiza btn se necessario
  handleActiveBtn();

  if (!target || !profissional) return;

  // profissional selecionado, input active.
  addActive(profissional);
  addActive(inputProfissional);
  inputProfissional.value = profissional.id

  // atualiza btn se necessario
  handleActiveBtn();
};

// selector
const boxProfissionais = document.querySelector("#boxProfissionais");

// event
if (boxProfissionais) {
  boxProfissionais.addEventListener("click", itemProfissionalActive);
}
