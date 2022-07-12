const fetchDog = require('./exercicio_6.js');

describe('Exercise 6', () => {
  const dog = jest.spyOn(fetchDog, 'fetchDog');
  afterEach(dog.mockReset);

  it('should resolve the request', async () => {
    dog.mockResolvedValue('resolved request');
    dog();
    expect(dog).toHaveBeenCalled();
    expect(dog).toHaveBeenCalledTimes(1);
    await expect(dog()).resolves.toBe('resolved request');
    expect(dog).toHaveBeenCalledTimes(2);
  });
  
  it('should reject the request', async () => {
    dog.mockRejectedValue('rejected request');
    expect(dog).toHaveBeenCalledTimes(0);
    await expect(dog()).rejects.toBe('rejected request');
    expect(dog).toHaveBeenCalledTimes(1);
  });
});
