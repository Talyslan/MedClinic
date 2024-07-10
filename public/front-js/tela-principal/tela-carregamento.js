const handlerCarregarPag = () => {
    const loadingScreen = document.querySelector("#tela-carregamento");
    loadingScreen.remove();
}

window.addEventListener('load', handlerCarregarPag);