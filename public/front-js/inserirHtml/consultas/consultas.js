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

async function fetchMedicoDoAgendamento(id, id_medico) {
  try {
    const response = await fetch(
      `http://localhost:3000/agendamentos/${id}/${id_medico}`
    );

    if (!response.ok) {
      throw new Error(`Erro ao buscar medico do agendamento do user ${id}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Erro ao buscar medico do agendamento: ", err);
  }
}

// variaveis
const idDoUser = 2;

const insertConsulta = async ({ formattedDate, hora, id_medico }) => {
  const medicoDoAgendamento = await fetchMedicoDoAgendamento(
    idDoUser,
    id_medico
  );

  const { nome, valorConsulta } = medicoDoAgendamento;

  return `
      <div class="box-consulta-item">
        <div style="margin-right: 30px;">
          <p class="legenda">CONSULTA COM</p>
          <p class="titulo">Dr. ${nome}</p>
  
          <p class="legenda">MARCADA PARA O DIA</p>
          <p class="titulo">${formattedDate} às ${hora}</p>
  
          <p class="legenda">NO VALOR DE</p>
          <p class="titulo">R$ ${valorConsulta}</p>
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

// Selectors
const boxConsultas = document.querySelector("#box-consulta");
const Consultas = await fetchAgendamento(idDoUser);
console.log(Consultas);

// Insert boxConsultas
for (const consulta of Consultas) {
  const consultaHTML = await insertConsulta(consulta);
  boxConsultas.innerHTML += consultaHTML;
}
