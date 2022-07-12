const readline = require('readline-sync');

const DISTANCIA = readline.questionInt('Informe a distância (m): ');
const TEMPO = readline.questionInt('Informe o tempo (seg): ');

const velocidadeMedia = (distancia, tempo) => distancia / tempo;

console.log(`Velocidade média: ${velocidadeMedia(DISTANCIA, TEMPO)} m/s`);