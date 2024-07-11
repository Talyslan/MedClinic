import { addDisabled, removeActive, removeDisabled } from "../funções-auxiliares/funcoesAuxiliares.js";

let profissionais = [];

async function fetchProfissionais() {
    try {
        const response = await fetch('http://localhost:3000/medicos');
        if (!response.ok) {
            throw new Error('Erro ao buscar profissionais');
        }
        profissionais = await response.json();
    } catch (err) {
        console.error("Erro ao buscar profissionais:", err);
    }
}

export const mostreProfissionaisDisponiveis = async (especializacaoSelected) => {
    // Ensure professionals data is fetched before proceeding
    if (profissionais.length === 0) {
        await fetchProfissionais();
    }
    console.log(profissionais);

    // Selectors
    const boxProfissionais = document.querySelector("#boxProfissionais");
    const selectProfissional = document.querySelector("#profissional");
    const itensProfissional = document.querySelectorAll(".itemProfissional");

    // Adicionando e removendo a propriedade disabled
    if (especializacaoSelected) {
        removeDisabled(selectProfissional);
    } else {
        removeActive(selectProfissional);
        itensProfissional.forEach((item) => item.classList.remove('active'));
        boxProfissionais.innerHTML = 'Aguardando a seleção do departamento...';
        selectProfissional.value = '';
        addDisabled(selectProfissional);
        return;
    }

    // Handler para inserir profissionais no box e no select
    const inserirProfissionais = ({ id, nome, especializacao, valorConsulta }) => {
        console.log(especializacao, especializacaoSelected)

        if (especializacao === especializacaoSelected) {
            return `
                <div class="itemProfissional" id="${id}">
                    <img src="../main-page/background-hero.jpg" alt="">
                    <div class="content">
                        <div class="up">
                            <h3>${nome}</h3>
                            <span>${especializacao}</span>
                        </div>
                        <div class="down">
                            <span>Valor da consulta:</span>
                            <span>R$<strong> ${valorConsulta}</strong></span>
                        </div>
                    </div>
                </div>
            `;
        }
        return '';
    };

    const inserirProfissionaisNoSelect = ({ nome, especializacao }) => {
        if (especializacao === especializacaoSelected) {
            return `<option value="${nome}">${nome}</option>`;
        }
        return '';
    };

    // Limpar o select antes de adicionar as novas opções e incluir a opção padrão
    selectProfissional.innerHTML = '<option value="" selected>Selecione o profissional</option>';

    // Inserir os profissionais no box e no select
    let profissionaisHTML = '';
    profissionais.forEach(profissional => {
        profissionaisHTML += inserirProfissionais(profissional);
        selectProfissional.innerHTML += inserirProfissionaisNoSelect(profissional);
    });

    boxProfissionais.innerHTML = profissionaisHTML;
};

// Inicializa a busca de profissionais
fetchProfissionais();
