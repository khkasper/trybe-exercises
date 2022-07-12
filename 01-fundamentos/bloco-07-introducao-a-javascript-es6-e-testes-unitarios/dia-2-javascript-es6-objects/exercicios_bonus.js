// 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
const nMathStudent = (a) => {
  for (let i = 0; i < Object.keys(a).length; i += 1) {
    if (a[Object.keys(a)[i]].materia === 'Matemática') {
      return a[Object.keys(a)[i]].numeroEstudantes;
    }
  }
};
// console.log(nMathStudent(allLessons));

// 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5.
// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const teacherInfo = (a, b) => {
  let totalStudent = 0;
  const lessonsT = [];
  const info = {};
  info.professor = b;
  for (let i = 0; i < Object.values(a).length; i += 1) {
    if (Object.values(a)[i].professor === b) {
      lessonsT.push(Object.values(a)[i].materia);
      totalStudent += Object.values(a)[i].numeroEstudantes;
    }
  }
  Object.assign(info, {lições: lessonsT, estudantes: totalStudent});
  return info
}
// console.log(teacherInfo(allLessons, 'Maria Clara'));


