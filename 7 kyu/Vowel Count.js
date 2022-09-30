function getCount(str) {
  const arr = str.split('');
  let count = 0;
  for (const el of arr) {
    if (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u') {
      count++
    }
  }
  return count;
}


// console.log(getCount('abracadabra'))

//interesting

function getCount2(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

 console.log(getCount2('abracadabra'))