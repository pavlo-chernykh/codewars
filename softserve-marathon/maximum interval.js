// Find the maximum interval between two consecutive numbers. Numbers are entered as arguments
// maxInterv(3, 5, 2, 7); //5


const maxInterv = (...args) => {
  const arr = [...args]
  let res = 0;
  arr.reduce((acc, n) => {
    const dif = Math.abs(acc - n)
    if (dif > res) {
      res = dif;
    }
    acc = n
    return acc
  })
  return res
}
// console.log(maxInterv(3, 5, 2, 7)); //5

console.log(maxInterv(3, 5, 2, 7, 11, 0, -2)) // 11