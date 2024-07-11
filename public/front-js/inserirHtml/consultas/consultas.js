// imports
async function fetchAgendamento(id) {
  try {
    const response = await fetch(`http://localhost:3000/agendamentos/${id}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar agendamentos do user ${id}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Erro ao buscar agendamentos:", err);
  }
}

// variaveis
// handlers
const insertPergunta = ({ hora, dataAgendamento, id_medico }) => {
    async function fetchMedicoDoAgendamento(id) {
        try {
          const response = await fetch(`http://localhost:3000/agendamentos/${id}`);
      
          if (!response.ok) {
            throw new Error(`Erro ao buscar agendamentos do user ${id}`);
          }
      
          return await response.json();
        } catch (err) {
          console.error("Erro ao buscar agendamentos:", err);
        }
      }



  return `
      <div class="box-consulta-item">
            <div style="margin-right: 30px;">
                <p class="legenda">CONSULTA COM</p>
                <p class="titulo">Dr. Name</p>

                <p class="legenda">MARCADA PARA O DIA</p>
                <p class="titulo">00-00-0000 às 00:00</p>

                <p class="legenda">NO VALOR DE</p>
                <p class="titulo">R$00,00</p>
            </div>

            <hr style="margin-right: 10px;">
            <div class="especialidade-box">
                <img src="../testes img/img.png" alt="">
            </div>
            <hr style="margin-left: 10px;">

            <div style="display: flex; flex-direction: column; padding-left: 30px;">
                <p class="legenda">LOCALIZAÇÃO</p>
                <p class="legenda" style="margin-bottom: 30px;">Localização</p>
                <button class="modify-consulta">Entrar em Contato</button>
                <button class="modify-consulta">Remarcar ou Cancelar</button>
            </div>
        </div>
    `;
};

const handlerMostrarResposta = ({ target }) => {
  const perguntaItem = target.closest(".perguntaItem");

  console.log("cliquei : ", perguntaItem);

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
let Consultas = await fetchConsultas(2);
console.log(Consultas);

// Insert perguntas
Consultas.forEach(
  (pergunta) => (boxPerguntas.innerHTML += insertPergunta(pergunta))
);

// Event Listener
boxPerguntas.addEventListener("click", handlerMostrarResposta);
