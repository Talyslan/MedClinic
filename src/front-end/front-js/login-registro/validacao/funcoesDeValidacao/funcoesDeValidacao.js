
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
3. pegue os dígitos do cpf e o primeiro dígito

*/
export const cpfValidation = () => {};
