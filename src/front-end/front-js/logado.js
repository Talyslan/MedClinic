const cod_navLogado = `
    <a href="#">
        <img src="./public/logos/logo-c-nome-lado.svg" alt="Logo MedClinic">
    </a>
    <nav class="">
        <div class="lado-esquerdo">
            <ul>
                <li><a href="#hero" class="link">home</a></li>
                <li><a href="#planos" class="link">planos</a></li>
                <li><a href="#sobre-nos" class="link">sobre nós</a></li>
            </ul>
        </div>

        <a href="./pages/login.html" class="btn">entrar</a>
    </nav>
    <span class="close-nav">&#10005;</span>
    <span class="open-nav">&#9776;</span>`

const cod_navDeslogado = `
<a href="../index.html">
<img src="../public/logos/logo-c-nome-lado.svg" alt="Logo MedClinic">
</a>
<nav class="">
<div class="lado-esquerdo">
    <ul>
        <li><a href="../index.html#hero" class="link">home</a></li>
        <li><a href="../index.html#planos" class="link">planos</a></li>
        <li><a href="../index.html#sobre-nos" class="link">sobre nós</a></li>
        <li><a href="./pages/painel-pac-consultas.html" class="link">Meu painel</a></li>
    </ul>
</div>

<div class="dropdown">
    <img src="../public/agendamento/user-illustration.png" alt="">
    <div class="dropdown-content">
        <button>Minhas consultas</button>
        <button id="sairDoLogin">Sair</button>
    </div>
</div>
</nav>
<span class="close-nav">&#10005;</span>
<span class="open-nav">&#9776;</span>`;

// selector
const header = document.querySelector("#header");

// event
const tokenOnLocalStorage = localStorage.getItem("token");

if (tokenOnLocalStorage) {
    header.innerHTML = cod_navLogado
}
else {
    header.innerHTML = cod_navDeslogado
    
    // handle
    const sairDoLoginTK = () => {
        localStorage.removeItem("token");
        location.reload();
    }
    
    // selector
    const sairDoLogin = document.querySelector("#sairDoLogin");
    
    // event
    sairDoLogin.addEventListener("click", sairDoLoginTK);
}
