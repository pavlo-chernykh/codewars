function findOdd(A) {
  let odd = 0
  const obj = {}
  for (let i = 0; i < A.length; i++) {
    const element = A[i];
    if (!(element in obj)) {
      obj[element] = 1;
    } else {
      obj[element]++;
    }
  }
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (obj[key] % 2 !== 0) {
      odd = key
    }
  })
  return +odd
}



//

function findOdd2(arr) {
  return arr.find(item => arr.filter(el => el == item).length % 2)
}
const res = findOdd2([1,1,1,1,1,1,10,1,1,1,1]) // 10
console.log(res);  




//wtf 
const findOdd3 = (xs) => xs.reduce((a, b) => a ^ b);