const longestWord = (str) => {
  let sortedWords = str.split(' ').sort((a, b) => b.length - a.length)
  return sortedWords[0]
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
