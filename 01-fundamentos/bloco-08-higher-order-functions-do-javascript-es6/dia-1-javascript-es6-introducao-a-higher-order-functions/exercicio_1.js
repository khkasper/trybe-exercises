const newEmployees = (employee) => {
  const employees = {
    id1: employee('Pedro Guerra'),
    id2: employee('Luiza Drumond'),
    id3: employee('Carla Paiva')
  }
  return employees;
};

const employee = (fullName) => {
  return {fullName, email: `${fullName.toLowerCase().split(' ').join('_')}@trybe.com`};
}

console.log(newEmployees(employee));
