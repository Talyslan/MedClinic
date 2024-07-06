// data
import { profissionais } from "../TESTmedicos.js";
import { 
    addDisabled,
    removeActive,
    removeDisabled 
} from "../funções-auxiliares/funcoesAuxiliares.js";

// primeira  section Informaçoes sobre departamento e profissional
export const mostreProfissionaisDisponiveis = (especializacaoSelected) => {
    // selectors
    const boxProfissionais = document.querySelector("#boxProfissionais");
    const selectProfissional = document.querySelector("#profissional");

    const profissionalSelect = document.querySelector("#profissional");
    // pega todos os profissionais e recebe um array
    const itensProfissional = document.querySelectorAll(".itemProfissional");

    // adicionando e removendo a propriedade disabled
    if (especializacaoSelected) {
        removeDisabled(profissionalSelect);
    }
    else {
        removeActive(profissionalSelect);
        itensProfissional.forEach((item) => removeActive(item));
        boxProfissionais.innerHTML = 'Aguardando a seleção do departamento...'
        profissionalSelect.value = ''
        addDisabled(profissionalSelect);
        return;
    }

    // handler
    // insere o card dos profissionais no boxProfissionais
    const inserirProfissionais = ({ nome, especialidade, imagem, valorConsulta }) => {
        // verifica se a especialidade escolhida é igual a do medico consultado e retorna
        if (especialidade === especializacaoSelected) {
            return `
              <div class="itemProfissional" id="">
                  <img src="${imagem}" alt="">
                  <div class="content">
                      <div class="up">
                          <h3>${nome}</h3>
                          <span>${especialidade}</span>
                      </div>
                      <div class="down">
                          <span>Valor da consulta:</span>
                          <span>R$<strong> ${valorConsulta}</strong></span>
                      </div>
                  </div>
              </div>
            `;      
        }
        else {
            return '';
        }
    };

    // insere as opt dos profissionais no Select
    const inserirProfissionaisNoSelect = ({ nome, especialidade }) => {
        // verifica se a especialidade escolhida é igual a do medico consultado e retorna
        if (especialidade === especializacaoSelected) {
            return `<option value="${nome}">${nome}</option>`;      
        }
        else return '';
    };

    // limpar o select antes de adicionar as novas opções
    // incluir a opção padrão
    selectProfissional.innerHTML = '<option value="" selected>Selecione o profissional</option>';

    // inserir
    if (boxProfissionais) {
        let profissionaisHTML = '';

        profissionais.forEach(profissional => {
            profissionaisHTML += inserirProfissionais(profissional);
            selectProfissional.innerHTML += inserirProfissionaisNoSelect(profissional);
        });

        boxProfissionais.innerHTML = profissionaisHTML;
    }
};