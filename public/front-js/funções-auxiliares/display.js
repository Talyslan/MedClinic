// recebe elementos html para tirar da tela e adicionar outro
export const alterarElementos = (elementoRemover, seletor, elementoAdicionar) => {
    elementoRemover.remove();

    seletor.innerHTML += elementoAdicionar;
};
