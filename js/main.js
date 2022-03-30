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
        } else {
            localStorage.setItem('acesso', 'aluno')    
        }



    }
}