function submitLogin(event) {
  const formData = new FormData(event.target);
  const formDataObject = {};
  // Inserindo dados que vieram para formDataObject
  formData.forEach((value, key) => (formDataObject[key] = value));

  console.log(formDataObject);

  return formDataObject;
}

async function getSenhaByEmail(event) {
  event.preventDefault();

  try {
    const formDataObject = submitLogin(event);
    // const { email, senha } = formDataObject;
    console.log(formDataObject)

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
    console.log("Resposta do servidor:", data);

    // Descomente as linhas abaixo se precisar acessar `senha` na resposta
    // const { senha } = data;
    // console.log("Senha:", senha);
    // return senha;
    window.location.href = "../index.html"


  } 
  catch (error) {
    console.error("Erro ao buscar senha: ", error);
    throw error;
  }
}

// Escuta o botão de login
const formLogin = document.getElementById("formLogin");
formLogin.addEventListener("submit", getSenhaByEmail);
