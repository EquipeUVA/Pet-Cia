// CÓDIGO PARA AS HORAS DO INICIO

let msg = window.document.getElementById('msg')
let data = new Date()
let hora = data.getHours()
let minutos = data.getMinutes()
let segundos = data.getSeconds()

if (minutos < 10) minutos = "0" + minutos
if (segundos < 10) segundos = "0" + segundos

if (hora >= 0 && hora < 12){
    msg.innerHTML = `Bom dia!! São ${hora}:${minutos}:${segundos}, Nas compras acima de R$100, o frete é grátis até o dia 30/04. Aproveite para conhecer nossos serviços!`
} 

else if(hora >= 12 && hora < 18){
    msg.innerHTML = `Boa tarde!! São ${hora}:${minutos}:${segundos}, Nas compras acima de R$100, o frete é grátis até o dia 30/04. Aproveite para conhecer nossos serviços!! `
}

else{
    msg.innerHTML = `Boa noite!! São ${hora}:${minutos}:${segundos}, Nas compras acima de R$100, o frete é grátis até o dia 30/04. Aproveite para conhecer nossos serviços!!` 
}

// CÓDIGO PARA O ALERT DO FORMULARIO


function envio(){
    let nome = document.getElementById('name').value
    let email = document.getElementById('email').value
    let mensagem = document.getElementById('message').value

    if (!nome || !email || !mensagem){
        window.alert("Por favor, preencha todos os campos!")
        return;
    }
    else{
        window.alert(`${nome}, sua mensagem foi enviada com sucesso!`)
    }
}





