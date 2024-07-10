
export const emailValidation = (email) => {

    /* 
    CONDIÇÕES PARA TER UM EMAIL VÁLIDO

    /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    */

    // TODO: Explicar essas condições aqui nos comentários em linguagem normal
    let padrao = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    return padrao.test(email)
};

export const passwordValidation = (password) => {
    /* 
    CONDIÇÕES PARA TER UMA SENHA VÁLIDA

    ^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{12,}$

    */

    // TODO: Explicar essas condições aqui nos comentários em linguagem normal
    // let padrao = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{12,}$/
    let padrao = new RegExp('^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\\d)[A-Za-z\\d!@#$%^&*(),.?":{}|<>]{12,}$');

    return padrao.test(password)
};

export const passwordConfirmValidation = (password_1, password_2) => {
    
    if (password_1 === password_2){
        return true
    }
    else { 
        return false
    }
};

export const cpfValidation = (cpf) => {

    // recebe o array em texto e quebra num array explícito para tratamento
    let cpf_array = cpf.split("")
    // elimina os caracteres que não são numéricos
    cpf_array = cpf_array.filter(char => /^[0-9]+$/i.test(char))
    // transforma todos os caracteres em números
    cpf_array = cpf_array.map(char => Number(char));

    // acumulador para a primeira verificação
    let prim_vef = 0
    // número para multiplicação no loop - será usado nas duas verificações
    let num_mult = 10

    // percorre cada número do CPF executando as multiplicações e somas sucessivas - primeira vez
    for (let index = 0; index < cpf_array.length; index++) {
        if (num_mult == 1) {
            break
        }
        const element = cpf_array[index];
        prim_vef = prim_vef + element * num_mult
        num_mult--


    }

    // multiplica o número encontrado por 10, divide por 11 e armazena seu resto
    prim_vef = (prim_vef * 10) % 11

    // aplica a exceção de que, se o resto for 10, consideramos como 0. 
    if (prim_vef == 10) {
        prim_vef = 0
    }

    // acumulador para a segunda verificação
    let sec_vef = 0
    // número para multiplicaçao no loop - sobrescreve o valor de 2 para 11
    num_mult = 11

    // percorre cada número do CPF executando as multiplicações e somas sucessivas - segunda vez
    for (let index = 0; index < cpf_array.length; index++) {

        if (num_mult == 1) {
            break
        }
        const element = cpf_array[index];
        sec_vef = sec_vef + element * num_mult
        num_mult--


    }

    // multiplica o número encontrado por 10, divide por 11 e armazena seu resto
    sec_vef = (sec_vef * 10) % 11

    if (sec_vef == 10) {
        sec_vef = 0
    }

    // executa a primeira verificação de validade do CPF - dígitos verificadores
    if (prim_vef == cpf_array[cpf_array.length - 2] && sec_vef == cpf_array[cpf_array.length - 1]) {
        // executa a segunda verificação de validade do CPF - digitos repeditos
        if (cpf_array[0] == cpf_array[1] && cpf_array[1] == cpf_array[2] && cpf_array[2] == cpf_array[3] &&
            cpf_array[3] == cpf_array[4] && cpf_array[4] == cpf_array[5] && cpf_array[5] == cpf_array[6] &&
            cpf_array[6] == cpf_array[7] && cpf_array[7] == cpf_array[8] && cpf_array[8] == cpf_array[9] &&
            cpf_array[9] == cpf_array[10]) {
            return false
        }
        else {
            return true
        }
    }
    else {
        return false
    }

};

export const telValidation = (tel) => { 
    let padrao = /^\d{11}$/

    return padrao.test(tel)
};

export const dateValidation = (date) => {
    // transforma a data recebida num objeto data

    let agora = Date.now()

    if ((agora - date) >= 568025136000) { 
        return true
    } 
    else { 
        return false
    }
    

}

export const nameValidation = (nome) => {
    let padrao = /^[A-Z][a-zA-Z'`-]+(?: [A-Z][a-zA-Z'`-]+)*$/

    return padrao.test(nome)

}

export const crmValidation = (crm) => {
    let padrao = /^CRM\/(AC|AL|AP|AM|BA|CE|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO|DF) \d{6}$/

    return padrao.test(crm)
}