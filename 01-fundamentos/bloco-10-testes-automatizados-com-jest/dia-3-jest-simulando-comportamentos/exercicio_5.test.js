const fnc = require('./exercicios_4_5.js');

describe('Exercise 5', () => {
  it('toUpper function should return the string in lower case', () => {
    const first = jest
      .spyOn(fnc, 'toUpper')
      .mockImplementation((string) => string.toLowerCase());
    expect(first('STRING')).toBe('string');
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith('STRING');
    fnc.toUpper.mockRestore();
    expect(fnc.toUpper('string')).toBe('STRING');
  });
});
