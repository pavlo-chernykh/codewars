// Test.assertEquals(minSum([5,4,2,3]), 22);  5*2 + 3*4 = 22

function minSum(arr) {
  const sortedArr = arr.sort((a,b)=>a-b)
  let min = 0;
  let max = sortedArr.length - 1;
  let sum = 0;
  for(let i = 0; i < sortedArr.length/2; i++) {
    sum += sortedArr[min] * sortedArr[max];
    console.log(min, max);
    min++;
    max--;
  }
  return sum
}

console.log(minSum([5,4,2,3]));

//
const minSum = arr => arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);