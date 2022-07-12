const fs = require('fs/promises');

const isPositive = (number) => {
  if (typeof number !== 'number') throw new Error('o valor deve ser um número');
  if (number === 0) return 'neutro';
  return number < 0 ? 'negativo' : 'positivo';
}

const writeToFile = async (...args) => {
  if (args.length !== 2) throw new Error('Número de argumentos inválido');
  const [filepath, content] = args;
  try {
    await fs.writeFile(filepath, content);
    return 'ok';
  } catch (error) {
    console.log(error.message);
  }
  return null;
};

module.exports = {
  isPositive,
  writeToFile
};