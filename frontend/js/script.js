function verificarUsuario() {

    const name_admin = document.getElementById('name-admin').value;
    const password_admin = document.getElementById('password-admin').value;

    if ([name_admin, password_admin].every(i => typeof i === "string" && i.trim() !== "")) {


        // URL do backend no Render
        const baseURL = 'https://appbgs.onrender.com';
        
        axios({
            method: 'get',
            url: `${baseURL}/confirmarUser`,
            params: {
                nome_usuario: name_admin,
                senha_usuario: password_admin
            }
        })
            .then(function (response) {
                const valoresRecebidos = response.data;
                
                sessionStorage.setItem('user', JSON.stringify({
                    id: valoresRecebidos.admin_id,
                    nome: valoresRecebidos.admin_name
                }));


                window.location.href = "../html/registrar_users.html"

                
            });



    } else {
        console.log('info faltando.')
    }


}