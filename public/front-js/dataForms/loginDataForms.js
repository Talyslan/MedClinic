class SubmissaoInFormLogin {
    submitLogin(event) {
        event.preventDefault(); // É boa prática evitar o comportamento padrão do formulário

        const formData = new FormData(event.target);
        const formDataObject = {};

        for (let [key, value] of formData.entries()) {
            formDataObject[key] = value;
        }

        // console.log(formDataObject);

        return formDataObject;
    }

    async getSenhaByEmail(event) {
        event.preventDefault();

        try {
            const formDataObject = this.submitLogin(event);
            // console.log(formDataObject);

            const urlLogin = `http://localhost:3000/login`;

            const response = await fetch(urlLogin, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formDataObject)
            });

            if (!response.ok) {
                throw new Error(`Erro ao acessar a rota: ${response.statusText}`);
            }

            const data = await response.json();
            console.log("Resposta do servidor: ", data);

            // Cria o token e armazena no sessionStorage
            const token = data.token; 
            console.log(token)
            sessionStorage.setItem('token', token);

            window.location.href = "./logado.html";
        }
        catch (error) {
            console.error("Erro ao buscar senha: ", error);
            throw error;
        }
    }
}

let SubmissaoInFormLoginObject = new SubmissaoInFormLogin();

const formLogin = document.getElementById("formLogin");
formLogin.addEventListener("submit", (event) => SubmissaoInFormLoginObject.getSenhaByEmail(event));
