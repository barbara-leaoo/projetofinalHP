function mostrarMensagem() {
    // Oculta todas as mensagens
    var mensagens = document.querySelectorAll('.mensagem');
    mensagens.forEach(function(mensagem) {
        mensagem.style.display = 'none';
    });

    // Mostra a mensagem específica
    var mensagemAtual = document.getElementById("mensagem");
    mensagemAtual.style.display = 'block';
}
function fecharMensagem() {
    var mensagemAtual = document.getElementById("mensagem") ;
    mensagemAtual.style.display = '';}



document.getElementById("btn-lufalufa").addEventListener("click", function() {
    mostrarMensagem(1);
});

document.getElementById("btn-sonserina").addEventListener("click", function() {
    mostrarMensagem(2);
});

document.getElementById("btn-corvinal").addEventListener("click", function() {
    mostrarMensagem(3);
});

document.getElementById("btn-grifinoria").addEventListener("click", function() {
    mostrarMensagem(4);
});

//-----------------------------//
const modalBody = document.getElementById('mensagem-lufalufa')
const modalBody1 = document.getElementById('mensagem-sonserina')
const modalBody2 = document.getElementById('mensagem-corvinal')
const modalBody3 = document.getElementById('mensagem-grifinoria')

fetch('https://hp-api.onrender.com/api/characters/students')
    .then(response => response.json())
    .then(response => exibirDados(response))
    .catch(err => console.log(err))

function exibirDados(dados) {
    const infos = document.createElement('div')
    infos.innerHTML = `<img src="${dados[0].image}" alt="${dados[0].name}">
    <p>${dados[0].name}</p>`

    const infos1 = document.createElement('div')
    infos1.innerHTML = `<img src="${dados[1].image}" alt="${dados[1].name}">
    <p>${dados[1].name}</p>`

    const infos2 = document.createElement('div')
    infos2.innerHTML = `<img src="${dados[2].image}" alt="${dados[2].name}">
    <p>${dados[2].name}</p>`

    const infos3 = document.createElement('div')
    infos3.innerHTML = `<img src="${dados[3].image}" alt="${dados[3].name}">
    <p>${dados[3].name}</p>`



    modalBody.append(infos)
    modalBody1.append(infos1)
    modalBody2.append(infos2)
    modalBody3.append(infos3)
}