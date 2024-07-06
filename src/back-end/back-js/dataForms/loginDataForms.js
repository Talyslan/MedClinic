function submitLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    console.log(formDataObject);

    return formDataObject;
}

async function getSenhaByEmail() {
    try {
      const formDataObject = submitLogin(event); 
      const email = formDataObject.email; 
  
      const url = `http://localhost:3000/senhaByEmail/${encodeURIComponent(email)}`;
  
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erro ao acessar a rota: ${response.statusText}`);
      }
  
      const senha = await response.json();
      console.log('Senha:', senha); 
      return senha;
    } catch (error) {
      console.error('Erro ao buscar senha:', error);
      throw error;
    }
  }
  

const formLogin = document.getElementById("formLogin");
formLogin.addEventListener("submit", function(event) {
    event.preventDefault();
    getSenhaByEmail(event);
});
