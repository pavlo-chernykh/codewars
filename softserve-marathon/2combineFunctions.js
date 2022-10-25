



const combineFunctions = (...args) => {
  return (innerArgs) => {
    return args.reduce((a, b) => {
      return b(a)
    }, innerArgs)
  }
}

// console.log(combineFunctions(x => x + 5)(3));  //8
	
// console.log(combineFunctions(x => x + x, x => x - 1, x => x !== 0)(5));  // true

console.log(combineFunctions(x => x + x, x => x - 1, x => x = -x, x => 'Hello, ' + x)(5));  //Hello, -9