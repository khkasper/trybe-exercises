const habs = ["HTML", "CSS", "JavaScript", "Jest", "Agile"];

function buildSkillsPhrase (a) {
  const fun1 = nome => (`Tryber ${nome} aqui!`);
  let result = `${fun1(a)} Minhas cinco principais habilidades são:`;
  habs.forEach((h, i) => result = `${result} ${h},`);
  result = `${result} #goTrybe`;
  return result;
}
console.log(buildSkillsPhrase("Kris"));
