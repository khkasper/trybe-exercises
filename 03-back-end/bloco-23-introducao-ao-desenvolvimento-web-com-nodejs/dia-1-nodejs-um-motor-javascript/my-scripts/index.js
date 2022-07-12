const readline = require('readline-sync');

const options = ['imc', 'velocidade', 'sorteio'];
const question = `Qual script deseja executar? (${options.join(', ')}): `;
const choice = readline.question(question);

if (!options.includes(choice)) return;

require(`./${choice}`);