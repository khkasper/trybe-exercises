// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function doisAnos() {
  document.getElementsByTagName("p")[0].innerText = 'Em dois anos estarei trabalhando em uma grande empresa de tecnologia.'
}
doisAnos()

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function trybeGreen() {
  document.getElementsByClassName("main-content")[0].style.backgroundColor = 'rgb(76,164,109)';
}
trybeGreen()

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.

function whiteBoard() {
  document.getElementsByClassName("center-content")[0].style.backgroundColor = 'rgb(255, 255, 255)';
}
whiteBoard()

// 4. Crie uma função que corrija o texto da tag <h1>.

function textChange() {
  document.getElementsByTagName("h1")[0].innerText = 'Exercício 5.1 - JavaScript'
}
textChange()

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function textUpper() {
  let upper = document.getElementsByTagName('p')[0].innerText;
  document.getElementsByTagName('p')[0].innerText = upper.toUpperCase()
}
textUpper()

// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function contentView() {
  let pgf = document.getElementsByTagName('p');
  for (let i = 0; i < pgf.length; i += 1) {
    console.log(pgf[i].innerText);
  }
}
contentView()