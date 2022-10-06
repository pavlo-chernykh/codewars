function validParentheses(parens) {
  const arr = parens.split('')
  const stack = []
  let left = 0;
  let right = 0;
  arr.forEach(el => {
    if (el === '(') {
      stack.push(el)
      left++
    }
    if (el === ')') {
      stack.pop(el)
      right ++
    }
  })
  if (left !== right) return false
  return !stack.length
}

// console.log(validParentheses("(())((()())())")); // true

//

function validParentheses2(parens){
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  return n == 0;
}

console.log(validParentheses2("(())((()())())")); // true