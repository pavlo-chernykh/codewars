// Return the length of the longest word in the provided sentence

// reduce

// const findLongestWord = (str) => {
//   return str.split(' ').reduce((a,b) => b.length > a.length ? b : a).length
// }

// sort

// const findLongestWord = (str) => {
//   return str.split(' ').sort((a,b) => b.length - a.length)[0].length
// }

console.log(findLongestWord(`The quick brown fox jumped over the lazy dog`));