function XO(str) {
  let x = 0;
  let o = 0;
  let string = str.split('');
  string.forEach(el => {
    if(el === 'x') x++;
    if(el === 'o') o++;
  })
  return x === o
}

// 

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}