const fnc = require('./exercicios_4_5.js');

jest.mock('./exercicios_4_5.js');

describe('Exercise 4', () => {
  it('toUpper function should minimalize the string', () => {
    fnc.toUpper.mockImplementation((string) => string.toLowerCase());
    expect(fnc.toUpper('STRING')).toBe('string');
    expect(fnc.toUpper).toHaveBeenCalled();
    expect(fnc.toUpper).toHaveBeenCalledTimes(1);
    expect(fnc.toUpper).toHaveBeenCalledWith('STRING');
    fnc.toUpper.mockRestore();
  });
  it('firstLetter function should get the last letter of the string', () => {
    fnc.firstLetter.mockImplementation((string) => string[string.length - 1]);
    expect(fnc.firstLetter('string')).toBe('g');
    expect(fnc.firstLetter).toHaveBeenCalled();
    expect(fnc.firstLetter).toHaveBeenCalledTimes(1);
    expect(fnc.firstLetter).toHaveBeenCalledWith('string');
  });
  it('concatStrings function should concatenate 3 strings', () => {
    fnc.concatStrings.mockImplementation(
      (string1, string2, string3) => string1 + string2 + string3
    );
    expect(fnc.concatStrings('a', 'b', 'c')).toBe('abc');
    expect(fnc.concatStrings).toHaveBeenCalled();
    expect(fnc.concatStrings).toHaveBeenCalledTimes(1);
    expect(fnc.concatStrings).toHaveBeenCalledWith('a', 'b', 'c');
  });
});
