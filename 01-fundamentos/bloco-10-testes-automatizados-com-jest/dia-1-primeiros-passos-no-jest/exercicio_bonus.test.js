const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const searchEmployee = (id, parameter) => {
  const employee = professionalBoard.find((professional) => professional.id === id);

  if (!employee) {
    throw new Error('ID não identificada');
  }

  if (!employee[parameter]) {
    throw new Error('Indisponível');
  }

  return employee[parameter];
};

describe('searchEmployee', () => {
  test('searchEmployee is function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  test('searchEmployee returns the ID', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
  });
  test('throws an error if unkown ID', () => {
    expect(() => searchEmployee('0000-0', 'firstName')).toThrow();
  });
  test('check error message if ID is unknown', () => {
    expect(() => searchEmployee('0000-0', 'firstName')).toThrowError(
      new Error('ID não identificada')
    );
  });
  test('throws an error if unkown parameter', () => {
    expect(() => searchEmployee('9852-2-2', 'test')).toThrow();
  });
  test('check if error if parameter is unknown', () => {
    expect(() => searchEmployee('9852-2-2', 'test')).toThrowError(
      new Error('Indisponível')
    );
  });
});
