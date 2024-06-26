// imports
import { listaDepartamentos } from "../data/DATAdepartamentos.js";

// handler
const insertCard = ({ department, icon, altText }) => {
  return `
    <div class="card">
        <img src="./public/main-page/icons-departamentos/${icon}" alt="${altText}">
        <div class="line"></div>
        <span>${department}</span>
    </div>`;
};

// selectors
const boxDepartamentos = document.querySelector("#boxDepartamentos");

// inserindo
listaDepartamentos.forEach((card) => boxDepartamentos.innerHTML += insertCard(card));
