import readline from 'readline-sync';

function makeError(unity: string) {
  throw new Error(`A unidade ${unity} não é uma unidade válida.`);
}

function convert(units: string[], value: number, forUnity: string, toUnity: string): number {
	if (!units.includes(forUnity)) makeError(forUnity);
	if (!units.includes(toUnity)) makeError(toUnity);

	const forIndex = units.indexOf(forUnity);
	const toIndex = units.indexOf(toUnity);
	const exponent = toIndex - forIndex;

	return value * Math.pow(10, exponent);
}

function exec(units: string[]) {
	const value = readline.questionFloat('Digite o valor a ser convertido: \n');

	const forUnityChoice = readline.keyInSelect(units, 'Escolha um número para a unidade base:', {
		cancel: 'SAIR',
	});

	if (forUnityChoice === -1) return console.log('Saindo!');

	const toUnityChoice = readline.keyInSelect(units, 'Escolha um número para a conversão:', {
		cancel: 'SAIR',
	});

	if (toUnityChoice === -1) return console.log('Saindo!');

	const forUnity = units[forUnityChoice];
	const toUnity = units[toUnityChoice];
	const result = convert(units, value, forUnity, toUnity);

	const message = `${value}${units[forUnityChoice]} é igual a ${result}${units[toUnityChoice]}`;

	console.log(message);
}

export default {
	convert,
	exec,
};
