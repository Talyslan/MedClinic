import {
  addActive,
  removeActive,
  handleActiveBtn,
} from "../../funções-auxiliares/btnActive&classActive.js";

// handle
const itemProfissionalActive = ({ target }) => {
  // pega card de profissional que foi clicado
  const btnHora = target.closest(".horaItem");
  console.log(btnHora)

  // pega todos os profissionais e recebe um array
  const horaItem = document.querySelectorAll(".horaItem");

  // pega input do lado esquerdo
  const inputHora = document.querySelector("#hora");

  // remove a classe active de todos para nao ter mais de um selecionado
  horaItem.forEach((item) => removeActive(item));
  removeActive(inputHora);
  // atualiza btn se necessario
  handleActiveBtn();

  if (!target || !btnHora) return;

  // profissional selecionado, input active.
  addActive(btnHora);
  addActive(inputHora);
  inputHora.value = btnHora.id;

  // atualiza btn se necessario
  handleActiveBtn();
};

// selector
const boxHorarios = document.querySelector("#boxHorarios");

// event
if (boxHorarios) {
    boxHorarios.addEventListener("click", itemProfissionalActive);
}