function squareDigits(num){
  const strSplitted = num.toString().split('');
  let newStr = ''
  for (let i = 0; i < strSplitted.length; i++) {
    newStr += (strSplitted[i] * strSplitted[i]);
  }
  return Number(newStr)
}

const result = squareDigits(2211)
console.log(result);

//

function squareDigits2(num){
  return +num.toString().split('').map(i => i*i).join('');
}