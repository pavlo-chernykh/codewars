//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

function pigIt(str){
  const arr = str.split(' ');
  let res = ''
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const wordArr = el.split('')
    const first = wordArr.splice(0, 1)
    if (el === '!' || el === '?') {
      wordArr.push(first.toString())
    } else {
      wordArr.push(first.toString() + 'ay')
    }
    const forRes = wordArr.join('')
    
    if (i !== arr.length -1) {
      res += forRes + ' '
    } else {
      res += forRes
    }
  }
  return res
}

// console.log(pigIt('Pig latin is cool'));

function pigIt(str){
  return str.split(" ").map( (item) => `${item.substr(1)}${item[0]}ay` ).join(" ")
}
//
// function pigIt2(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }
console.log(pigIt('Pig latin is cool'));