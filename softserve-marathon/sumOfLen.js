// The function takes any number of strings and returns the sum of their lengths.

const sumOfLen = (...args) => {
  let l = 0
  args.forEach(el => l += el.length)
  return l
}

//
// const sumOfLen = (...str) => str.join('').length;



console.log(sumOfLen('hello', 'hi')); //7