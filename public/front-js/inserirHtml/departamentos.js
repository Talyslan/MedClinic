// imports
import { listaDepartamentos } from "../data/DATAdepartamentos.js";

// handler
const insertCard = ({ department, icon, altText }) => {
  return `
    <div class="card" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
        <img src="../main-page/icons-departamentos/${icon}" alt="${altText}">
        <div class="line"></div>
        <span>${department}</span>
    </div>`;
};

// selectors
const boxDepartamentos = document.querySelector("#boxDepartamentos");

// inserindo
listaDepartamentos.forEach((card) => boxDepartamentos.innerHTML += insertCard(card));
