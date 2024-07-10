// data
import { listaDados, listaImg } from "../data/DATAdout-especializados.js";

// handler
const inserirDados = ({ title, description }) => {
  return `
    <div class="item">
        <h3>${title}</h3>
        <p>${description}</p>
    </div>
    `;
};

const inserirImg = (img) => `<img src="../main-page/galeria-grid/${img}" alt="">`;

// selectors
const boxDados = document.querySelector("#boxDados");
const boxImg = document.querySelector("#boxImg");

// inserir
listaDados.forEach((dado) => (boxDados.innerHTML += inserirDados(dado)));
listaImg.forEach(img => boxImg.innerHTML += inserirImg(img))
