const { isPositive, writeToFile } = require('../exercises');
const { expect } = require('chai');
const uuid = require('node-uuid');
const fs = require('fs/promises');
const sinon = require('sinon');

describe('A função "isPositive" deve', () => {
  it('retornar uma string', () => {
    expect(typeof isPositive(1)).to.be.equal('string');
  });

  it('retornar "positivo" quando o número for maior que 0', () => {
    expect(isPositive(10)).to.be.equal('positivo');
  });

  it('retornar "negativo" quando o número for menor que 0', () => {
    expect(isPositive(-10)).to.be.equal('negativo');
  });

  it('retornar "neutro" quando o número igual a 0', () => {
    expect(isPositive(0)).to.be.equal('neutro');
  });

  it('lançar uma exceção se o argumento recebido não for um número', () => {
    expect(() => isPositive('trybe')).to.throw(/o valor deve ser um número/);
  });
});

sinon.stub(fs, 'writeFile').resolves('Success');

describe('A função "writeToFile" deve', () => {
  it('lançar um error quando receber um número de argumentos diferente de 2', async () => {
    try {
      await writeToFile();
    } catch (error) {
      expect(error).to.match(/Número de argumentos inválido/);
    }
  })

  it('retornar "ok" após realizar a escrita no arquivo', async () => {
    const FILEPATH = `./teste-${uuid()}.txt`;
    const CONTENT = "CONTEÚDO DO ARQUIVO";
    const result = await writeToFile(FILEPATH, CONTENT);
    expect(result).to.be.equal('ok');
  })
})