function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

describe('check fizzBuzz', () => {
  it('divides by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('is divided by 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });

  it('divides by 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('doesnt divide by 3 or 5', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  it('isnt a number', () => {
    expect(myFizzBuzz('4')).toBeFalsy();
  });
});