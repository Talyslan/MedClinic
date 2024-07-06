export const sections = {
  selecione_departamento: `
      <div class="wrapper" id="selecione-departamento">
            <section class="lado-esquerdo">
                <div class="title">
                    <h2>Selecione o departamento</h2>
                </div>
                
                <div class="inputs">
                    <div class="bolinhas">
                        <div class="line"></div>
                        <span>1</span>
                        <span>2</span>
                    </div>
                    <form id="selecione-departamento-form">
                        <label for="especializacao">
                            <span>Selecionar departamento</span>
                            <select autofocus name="especializacao" id="especializacao" class="inputVerify">
                                <option value="" selected>Escolha sua especialização</option>
                            </select>
                        </label>
                        <label for="profissional">
                            <span>Selecionar profissional</span>
                            <select name="profissional" id="profissional" class="inputVerify" disabled >
                                <option value="" selected>Selecione o profissional</option>
                            </select>
                            
                        </label>
                        
                        <button class="btn selecionarDep" disabled>Continuar</button>
                    </form>
                </div>
            </section>


            <section class="lado-direito">
                <div class="boxProfissionais" id="boxProfissionais">
                    Aguardando a seleção do departamento...
                </div>
            </section>
        </div>`,

  selecione_datahora: function ({
    imagem,
    nome,
    especialidade,
    valorConsulta,
    horasDisponiveis,
  }) {
    const horariosButtons = horasDisponiveis
      .map((hora) => `<button class="horaItem" disabled>${hora}</button>`)
      .join(" ");

    const horariosOptions = horasDisponiveis
      .map((hora) => `<option value="${hora}">${hora}</option>`)
      .join(" ");

    return `
      <div class="wrapper" id="selecione-datahora"> 
            <section class="lado-esquerdo">
                <div class="title">
                    <!-- <button class="voltar" id="volta">voltar</button> -->
                    <h2>Informe a data e a hora</h2>
                </div>
                
                <div class="inputs">
                    <div class="bolinhas">
                        <div class="line"></div>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>
                    <form id="selecione-datahora-form">
                        <label for="data">
                            <span>Selecione a data disponível</span>
                            <input autofocus type="date" id="data" name="data" placeholder="Selecione a data" class="inputVerify"></input>
                        </label>
                        <label for="hora">
                            <span>Selecione a hora disponível</span>
                            <select name="hora" id="hora" class="inputVerify" disabled >
                                <option value="" selected>Selecione a hora</option>
                                ${horariosOptions}
                            </select>
                        </label>
                        <label for="pagamento">
                            <span>Selecione a forma de pagamento</span>
                            <select name="pagamento" id="pagamento" class="inputVerify" disabled>
                                <option value="" selected>Selecionar a forma de pagamento</option>
                                <option value="Dinheiro">Dinheiro</option>
                                <option value="PIX">PIX</option>
                            </select>
                        </label>

                        <button class="btn" type="submit" disabled>Continuar</button>
                    </form>
                </div>
            </section>

            <section class="lado-direito">
                <div class="itemProfissional active" id="0">
                    <img src="${imagem}" alt="">
                    <div class="content">
                        <div class="up">
                            <h3>${nome}</h3>
                            <span>${especialidade}</span>
                        </div>
                        <div class="down">
                            <span>Valor da consulta:</span>
                            <span>R$<strong>${valorConsulta}</strong></span>
                        </div>
                    </div>
                </div> 

                <div class="horarios">
                    <h3>Horários disponíveis</h3>
                    <div class="boxHorarios" id="boxHorarios">${horariosButtons}</div>
                </div>
            </section>
        </div>
      `;
  },

  confirmar_dados: function ({
    nome,
    especializacao,
    profissional,
    valorConsulta,
    hora,
    data,
    pagamento,
  }) {
    return `
      <div class="wrapper" id="confirmar-dados">
            <section class="lado-esquerdo">
                <div class="title">
                    <!-- <button class="voltar">voltar</button> -->
                    <h2>Confirme seus dados</h2>
                </div>
                
                <div class="inputs">
                    <div class="boxInformacoes">
                        <div class="infoItem">
                            <span>Departamento:</span>
                            <span>${especializacao}</span>
                        </div>
                        <div class="infoItem">
                            <span>Data e hora:</span>
                            <span>${data} às ${hora}</span>
                        </div>
                        <div class="infoItem">
                            <span>Profissional:</span>
                            <span>${profissional}</span>
                        </div>
                        <div class="infoItem">
                            <span>Pagamento:</span>
                            <span>${pagamento}: R$ ${valorConsulta}</span>
                        </div>
                    </div>

                    <div class="botoes">
                        <button class="btn" id="confirmar">Confirmar</button>
                        <button class="btn" id="cancelar">Cancelar</button>
                    </div>
                </div>
            </section>

            <section class="lado-direito">  
                <img src="../public/agendamento/doctor.svg" alt="img doutor"/>   
            </section>
        </div>
      `;
  },
};
