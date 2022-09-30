function spinWords(string){
  const arr = string.split(' ').map(el => {
    if (el.length > 4) {
      return el.split('').reverse().join('')
    }
    return el
  });
  return arr.join(' ')
}

const res = spinWords( "Hey fellow warriors" ) // => returns "Hey wollef sroirraw" 
console.log(res);