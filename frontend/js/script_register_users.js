const usuarioLogado = JSON.parse(sessionStorage.getItem('user'));
console.log(usuarioLogado);


function criarContatos() {

    const nomeContato = document.getElementById('name_content').value;
    const emailContato = document.getElementById('email_content').value;
    const telefContato = document.getElementById('telef_content').value;
    const empresaContato = document.getElementById('empresa_content').value;
    const linkedinContato = document.getElementById('linkedin_content').value;

    if ([nomeContato, emailContato, telefContato].every(i => typeof i === "string" && i.trim() !== "")) {
        console.log('Tudo certo por aqui!!')


        // URL do backend no Render
        const baseURL = 'https://appbgs.onrender.com';
        
        axios.post(`${baseURL}/criarContatos`, {
            name_contact: nomeContato,
            email_contact: emailContato,
            telef_contact: telefContato,
            empresa_contact: empresaContato,
            linkedin_contact: linkedinContato,
            id_admin : usuarioLogado.id
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });




    } else {
        console.log('Informações faltando.')
    }




}



