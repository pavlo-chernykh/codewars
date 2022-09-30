/* The goal of this exercise is to convert a string to a new string where each
character in the new string is "(" if that character appears only once in the 
original string, or ")" if that character appears more than once in the original
string. Ignore capitalization when determining if a character is a duplicate. */

function duplicateEncode(word){
  const obj = {}
  const arr = word.toLowerCase().split('');
  arr.forEach(el => {
    if (!(el in obj)) {
      obj[el] = 1
    } else obj[el]++ 
  })
  const res = arr.map(el => {
    return obj[el] === 1 ? '(' : ')'
  }).join('')
  return res;
}

const res = duplicateEncode("recede") // "()()()"
console.log(res); 

// 
function duplicateEncode2(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}