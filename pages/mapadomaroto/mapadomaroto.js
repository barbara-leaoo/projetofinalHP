alert('O Sr. Aluado apresenta seus cumprimentos ao Prof. Snape e pede que ele não meta seu nariz anormalmente grande no que não é de sua conta.')

document.addEventListener('DOMContentLoaded', function () {
  var botaoToggle = document.getElementById('botaoToggle');
  var informacoes = document.getElementById('informacoes');

  botaoToggle.addEventListener('click', function () {
    informacoes.classList.toggle('esconder');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var botaoToggle2 = document.getElementById('botaoToggle2');
  var informacoes = document.getElementById('informacoes');



  botaoToggle2.addEventListener('click', function () {
    informacoes.classList.toggle('esconder');
  });
});


function scrollParaImagem() {
  const imagemAnchor = document.getElementById('imagem-anchor');
  imagemAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
}