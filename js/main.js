function EnviarForm() {
    var login = document.getElementById('input-login').value
    var senha = document.getElementById('input-senha')

    if (login === "" || login === undefined || login === null) {
        alert('Preencha todos os campos, por favor.')
    }

    else if (senha === "" || senha === undefined || senha === null) {
        alert('Preencha todos os campos, por favor.')
    }

    else {
        if (login == 'responsavel') {
            localStorage.setItem('acesso', 'resp')
            localStorage.setItem('chat-tipo-login', 1)
            
        } else {
            localStorage.setItem('acesso', 'aluno')  
            localStorage.setItem('chat-tipo-login', 2)  
        }



    }
}

function Exit() {
  
        localStorage.removeItem('acesso')
        localStorage.removeItem('chat-tipo-login')
        window.location.reload(true)

        location.href = 'index.html';

}