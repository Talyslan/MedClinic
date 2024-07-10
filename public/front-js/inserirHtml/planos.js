// imports
import { listaPlanos } from "../data/DATAplanos.js";

// handler
const insertPlano = ({ nome, preco, beneficios, classes }) => {
  return `
  <div class="${classes}">
        <h3>${nome}</h3>
        <span>${preco}</span>

        <div class="beneficios">
            <span>${beneficios[0]}</span>
            <span>${beneficios[1]}</span>
            <span>${beneficios[2]}</span>
            <span>${beneficios[3]}</span>
            <span>${beneficios[4]}</span>
        </div>

        <a href="" class="btn">Escolher Plano!</a>
    </div>`;
};

// selector
const boxPlanos = document.querySelector("#boxPlanos");

// insert
listaPlanos.forEach((plano) => (boxPlanos.innerHTML += insertPlano(plano)));
