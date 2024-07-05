import { alterarElementos } from "../../funções-auxiliares/display.js";

// handle
const form1Submit = (event) => {
    event.preventDefault()

    console.log(event)

    const formData1 = new FormData(event.target);

    console.log(formData1)

    const formDataObject = {};

    formData1.forEach((value, key) => formDataObject[key] = value);

    console.log(formDataObject);

    const selecione_departamento = document.querySelector("#selecione-departamento");
    const main = document.querySelector("main")

    alterarElementos(selecione_departamento, main, sections.selecione_datahora)

}


// selector
const form1 = document.querySelector("form")
const btnForm1 = document.querySelector(".btn")

// evemt
if (form1) {
    form1.addEventListener("submit", form1Submit)
}


/* Pagina selecione datahora */
const sections = {
    selecione_departamento:`
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
                <form>
                    <label for="especializacao">
                        <span>Selecionar departamento</span>
                        <select autofocus name="especializacao" id="especializacao" class="inputVerify">
                            <option value="" selected>Escolha sua especialização</option>
                        </select>
                    </label>
                    <label for="profissional">
                        <span>Selecionar profissional</span>
                        <input type="text" id="profissional" name="profissional" disabled placeholder="Selecione o profissional" class="inputVerify"></input>
                    </label>
                    
                    <button class="btn" disabled>Continuar</button>
                </form>
            </div>
        </section>


        <section class="lado-direito">
            <div class="boxProfissionais" id="boxProfissionais"></div>
        </section>
    </div>`,
    selecione_datahora: `
    <div class="wrapper" id="selecione-datahora">
        <section class="lado-esquerdo">
            <div class="title">
                <button class="voltar">voltar</button>
                <h2>Informe a data e a hora</h2>
            </div>
            
            <div class="inputs">
                <div class="bolinhas">
                    <div class="line"></div>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <form>
                    <label for="data">
                        <span>Selecione a data disponível</span>
                        <input autofocus type="date" id="data" name="data" placeholder="Selecione a data" class="inputVerify"></input>
                    </label>
                    <label for="hora">
                        <span>Selecione a hora disponível</span>
                        <input type="text" disabled id="hora" name="hora" placeholder="Selecione a hora" class="inputVerify"></input>
                    </label>
                    <label for="pagamento">
                        <span>Selecione a forma de pagamento</span>
                        <select name="pagamento" id="pagamento" class="inputVerify">
                            <option value="" selected>Selecionar a forma de pagamento</option>
                            <option value="Dinheiro">Dinheiro</option>
                            <option value="PIX">PIX</option>
                        </select>
                    </label>

                    <button class="btn" disabled>Continuar</button>
                </form>
            </div>
        </section>

        <section class="lado-direito"></section>
    </div>`,
    confirme_dados: `
    <div class="wrapper" id="confirme-dados">
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
                <form>
                    <label for="especializacao">
                        <span>Selecionar departamento</span>
                        <select name="especializacao" id="especializacao" class="inputVerify">
                            <option value="" selected>Escolha sua especialização</option>
                        </select>
                    </label>
                    <label for="profissional">
                        <span>Selecionar profissional</span>
                        <input type="text" disabled id="profissional" name="profissional" placeholder="Selecione o profissional" class="inputVerify"></input>
                    </label>
                    <button class="btn" disabled>Continuar</button>
                </form>
            </div>
        </section>


        <section class="lado-direito">
            <div class="boxProfissionais" id="boxProfissionais"></div>
        </section>
    </div>`
}