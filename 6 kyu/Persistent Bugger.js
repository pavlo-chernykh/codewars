// should return number of times you must multiply the digits in num until you reach a single digit.
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)

function persistence(num, counter = 0) {
  if (num < 10) {
    return 0
  }
  const arr = num.toString().split('');
  const reducedArr = arr.reduce((acc, num) => {
    return acc * +num
  },1)
  counter++
  if (reducedArr < 10) {
    return counter
  } else return (persistence(reducedArr, counter++))
}

const res = persistence(39) // 3
console.log(res);

//
function persistence2(num) {
  let times = 0;
  
  num = num.toString();
  
  while (num.length > 1) {
    times++;
    num = num.split('').reduce((a, b) => a * +b).toString();
  }
  
  return times;
}
//
const persistence3 = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}