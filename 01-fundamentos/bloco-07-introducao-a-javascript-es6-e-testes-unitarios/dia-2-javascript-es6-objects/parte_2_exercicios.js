const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
// a = objeto, b = chave, c = valor
const newKeyValue = (a, b, c) => a[b] = c;
newKeyValue(lesson2, 'turno', 'noite');
// console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const keys = (a) => Object.keys(a);
// console.log(keys(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto.
const objLength = (a) => Object.keys(a).length;
// console.log(objLength(lesson1));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const values = (a) => Object.values(a);
// console.log(values(lesson1));

// 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3 .
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
const nStudents = (a) => {
  let n = 0;
  for (let i = 0; i < Object.keys(a).length; i += 1) {
    n += a[Object.keys(a)[i]].numeroEstudantes;
  }
  return n;
};
// console.log(nStudents(allLessons));

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (a,b) => Object.values(a)[b];
// console.log(getValueByNumber(lesson3, 2));

// 8. Crie uma função que verifique se o par (chave/valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
// a = objeto, b = chave, c = valor
const verifyPair = (a, b, c) => {
  for (let i = 0; i < Object.entries(a).length; i += 1) {
    if (Object.entries(a)[i][0] === b && Object.entries(a)[i][1] === c) {
      return true;
    }
  }
  return false;
};
// console.log(verifyPair(lesson3, 'turno', 'noite'));
