const changeCharacters = (string, character) => {
  let phrase = '';
  for (let char of string) {
    if (!character[char]) {
      phrase += char;
    } else {
      phrase += character[char];
    }
  }
  return phrase;
};

const encode = (string) => {
  let character = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return changeCharacters(string, character);
};

const decode = (string) => {
  let character = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return changeCharacters(string, character);
};

describe('test encode and decode functions', () => {
  test('encode and decode are functions', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  test('encode changes vowels to numbers', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('decode changes numbers to vowels', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  test('decode and encode does not change consonants', () => {
    expect(encode('bcdfghjklmnpqrstvyxwz')).toBe('bcdfghjklmnpqrstvyxwz');
    expect(decode('67890')).toBe('67890');
  });

  test('result has same lenght as the original string', () => {
    expect(encode('string')).toHaveLength(6);
    expect(decode('str3ng')).toHaveLength(6);
    expect(encode('administration')).toHaveLength(14);
    expect(decode('1dm3n3str1t34n')).toHaveLength(14);
  });
});
