// CÓDIGO PARA AS HORAS DO INICIO

let msg = window.document.getElementById('msg')
let data = new Date()
let hora = data.getHours()
let minutos = data.getMinutes()

if (minutos < 10) minutos = "0" + minutos

if (hora >= 0 && hora < 12) {
    msg.innerHTML = `Bom dia!! São ${hora}:${minutos}. Em compras acima de R$100, o frete é por nossa conta até 30/04. Que tal aproveitar e conhecer tudo o que a gente oferece?`
}

else if (hora >= 12 && hora < 18) {
    msg.innerHTML = `Boa tarde!! São ${hora}:${minutos}. Em compras acima de R$100, o frete é por nossa conta até 30/04. Que tal aproveitar e conhecer tudo o que a gente oferece? `
}

else {
    msg.innerHTML = `Boa noite!! São ${hora}:${minutos}. Em compras acima de R$100, o frete é por nossa conta até 30/04. Que tal aproveitar e conhecer tudo o que a gente oferece?`
}

// CÓDIGO PARA O ALERT DO FORMULARIO


function envio() {
    let nome = document.getElementById('name').value
    let email = document.getElementById('email').value
    let mensagem = document.getElementById('message').value

    if (!nome || !email || !mensagem) {
        window.alert("Por favor, preencha todos os campos!")
        return;
    }
    else {
        window.alert(`${nome}, sua mensagem foi enviada com sucesso!`)
    }
}

function cadastro() {
    let text = document.getElementById('texto').value
    let emaail = document.getElementById('gmail').value


    if (!text || !emaail) {
        window.alert("Por Favor, preencha todos os campos!")
    }

    else {
        window.alert("Obrigado por se cadastrar, em breve vc receberá novidades e promoções do nosso site!!")
    }
}





