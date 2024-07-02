
export const emailValidation = () => {
    
    /* 
    CONDIÇÕES PARA TER UM EMAIL VÁLIDO

    /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    */
};

export const passwordValidation = () => {
    /* 
    CONDIÇÕES PARA TER UMA SENHA VÁLIDA

    ^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{12,}$

    */
};

export const passwordConfirmValidation = () => {
    /* 
    CONDIÇÕES PARA TER UMA SENHA VÁLIDA (CONFIRMAÇÃO)

    A senha digitada precisa ser idêntica a senha fornecida

    */
};

// EXISTE UM ALGORITMO PRA VALIDAR CPF! 

/*

1. pegue os digitos do cpf e multiplique de 10 a 2 em ordem decrescente
2. multiplique o numero encontrado por 10, divida por 11 e armazene o resto da divisão (se ele for 10, transforme em 0)
3. pegue os dígitos do cpf e o primeiro dígito verificador e multiplicar na sequência decrescente de 11 até 12
4. multiplique o numero encontrado por 10, divida por 11 e armazene o resto

*/
export const cpfValidation = (cpf) => {

    // recebe o array em texto e quebra num array explícito para tratamento
    let cpf_array = cpf.split("")
    // elimina os caracteres que não são numéricos
    cpf_array = cpf_array.filter(char => /^[0-9]+$/i.test(char))
    // transforma todos os caracteres em números
    cpf_array = cpf_array.map(char => Number(char));

    // passo 1 do algoritmo

    let prim_vef = 0
    let num_mult = 10

    cpf_array.forEach(element => {
        prim_vef = prim_vef + element * num_mult
        num_mult--
    });

    // passo 2 do algoritmo

    prim_vef = (prim_vef * 10) % 11

    if (prim_vef == 10){
        prim_vef = 0
    }

    // passo 3 do algoritmo

    let sec_vef = 0 
    num_mult = 11

    cpf_array.forEach(element => {
        sec_vef = sec_vef + element * num_mult
        num_mult--
    });

    // passo 4 do algoritmo 

    sec_vef = (sec_vef * 10) % 11

    if (prim_vef == cpf_array[-2] && sec_vef == cpf_array[-1]){
        return true
    }
    else { 
        return false
    }




};

cpfValidation("123.456.789-00")