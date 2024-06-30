// imports
import { listaPerguntas } from "../data/DATAperguntas.js";

// variaveis
const path = "./public/main-page/icons/";
const icons = {
  plus: "plus.svg",
  minus: "minus.svg",
};
const { plus, minus } = icons;

// handlers
const insertPergunta = ({ pergunta, resposta }) => {
  return `
    <div class="perguntaItem">
      <div class="pergunta">
        <span>${pergunta}</span>
        <img src="${path + plus}" alt="">
      </div>
      <p class="resposta">${resposta}</p>
    </div>
  `;
};

const handlerMostrarResposta = ({ target }) => {
  const perguntaItem = target.closest(".perguntaItem");

  if (!perguntaItem) return;

  perguntaItem.classList.toggle("showResposta");

  const icon = perguntaItem.querySelector("img");
  if (icon) {
    const currentIcon = icon.getAttribute("src");
    icon.src = currentIcon === path + plus ? path + minus : path + plus;
  }
};

// Selectors
const boxPerguntas = document.querySelector("#boxPerguntas");

// Insert perguntas
listaPerguntas.forEach((pergunta) => {
  boxPerguntas.innerHTML += insertPergunta(pergunta);
});

// Event Listener
boxPerguntas.addEventListener("click", handlerMostrarResposta);
