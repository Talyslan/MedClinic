// imports
async function fetchLembretes(id) {
    try {
        const response = await fetch(`http://localhost:3000/lembretes/medico/${id}`);
  
        if (!response.ok) {
            throw new Error(`Erro ao buscar lembretes do user ${id}`);
        }
  
        return await response.json();
    } 
    catch (err) {
        console.error("Erro ao buscar profissionais:", err);
    }
  }
  
  
  // variaveis
  const path = "../main-page/icons/";
  const icons = { plus: "plus.svg", minus: "minus.svg" };
  const { plus, minus } = icons;
  
  // handlers
  const insertPergunta = ({ titulo, data_envio, mensagem}) => {
    return `
      <div class="perguntaItem">
          <div class="pergunta">
              <div>
                  <input type="checkbox" name="notificacao" id="notificacao">
                  <span class="title">${titulo}</span>
              </div>
              <div class="abrir">
                  <span>${data_envio}</span>
                  <img src="${path + plus}" alt=""></img>
              </div>
          </div>
          <p class="resposta">${mensagem}</p>
          <hr>
      </div>
    `;
  };
  
  const handlerMostrarResposta = ({ target }) => {
    const perguntaItem = target.closest(".perguntaItem");
  
    console.log("cliquei : ", perguntaItem)
  
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
  let lembretes = await fetchLembretes(7)
  console.log(lembretes)
  
  // Insert perguntas
  lembretes.forEach((pergunta) => boxPerguntas.innerHTML += insertPergunta(pergunta));
  
  // Event Listener
  boxPerguntas.addEventListener("click", handlerMostrarResposta);
  