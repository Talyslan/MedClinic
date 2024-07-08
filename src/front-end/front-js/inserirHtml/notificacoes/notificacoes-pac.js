function notificacaoHtml(mensagem) {
    return `
        <p id="mensagem">
            ${mensagem}
        </p>
    `;
}

function downCima() {
    return `
       <span class="down" id="down">▲</span>
    `;
}

const mensagem = document.getElementById('mensagem');
const down = document.getElementById('down');

down.addEventListener('click', function () {
    if (mensagem.innerHTML.trim()) {
        mensagem.innerHTML = '';
    } else {
        mensagem.innerHTML = notificacaoHtml('Esta é uma mensagem de notificação.');
    }
});