// variaveis
const path = "../public/main-page/icons/";
const icons = {
  plus: "plus.svg",
  minus: "minus.svg",
};
const { plus, minus } = icons;

// handlers
const insertPergunta = ({ titulo, data_envio, mensagem}) => {
  return `
    <div class="perguntaItem">
        <label for="notificacao" class="pergunta">
            <div>
                <input type="checkbox" name="notificacao" id="notificacao">
                <span class="title">${titulo}</span>
            </div>
            <div>
                <span>${data_envio}</span>
                <img src="${path + plus}" alt=""></img>
            </div>
        </label>
        <p class="resposta">${mensagem}</p>
        <hr>
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
