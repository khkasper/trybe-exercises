const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('uppercase', () => {
  test('string converted to uppercase', (done) => {
    uppercase('super dupper', (result) => {
      try {
        expect(result).toBe('SUPER DUPPER');
      done();
      } catch (error) {
        done(error);
      }
    });
  });
});