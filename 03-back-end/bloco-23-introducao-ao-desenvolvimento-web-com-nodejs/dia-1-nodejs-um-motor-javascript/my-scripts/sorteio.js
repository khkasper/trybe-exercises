const readline = require('readline-sync');

const getRandomNumber = (maxNumber) => Math.floor(Math.random() * (maxNumber + 1));

const game = () => {
  const randomNumber = getRandomNumber(10);
  const userGuess = readline.questionInt('Adivinhe um nuúmero de 1 a 10: ');
  if (userGuess == randomNumber) return 'Parabéns, número correto!';
  return `Opa, não foi dessa vez.  O número era ${randomNumber}`;
}

let playAgain = null;
do {
  const result = game();
  console.log(result);
  playAgain = readline.question('Deseja jogar novamente? (Y/n): ');
} while (playAgain.toLowerCase() === 'y');