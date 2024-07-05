// data
import { profissionais } from "../TESTmedicos.js";

let i = 0

// handler
const inserirProfissionais = ({ nome, especialidade, imagem, valorConsulta }) => {
  return `
    <div class="itemProfissional" id="${i++}">
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
};

// selectors
const boxProfissionais = document.querySelector("#boxProfissionais");

// inserir
if (boxProfissionais) {
    profissionais.forEach(profissional => {
        boxProfissionais.innerHTML += inserirProfissionais(profissional);
    });
}

