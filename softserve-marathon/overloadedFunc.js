// Using the default parameter technique, overload the overloadedFunc() function, which takes 3 arguments. 
//For the 1st argument of the function set the default value [1, 2, 3], for the 2nd - the value 2, 
// for the 3rd - the function that returns the product of the first two arguments, and the function can multiply both arrays and numbers.
//The overloadedFunc() function returns the result of the default function.


function overloadedFunc(a = [1,2,3], b = 2, c=a*b) {
  if (Array.isArray(a) && c === func.sum) {
    return a.map(el => el + b)
  }
  if (typeof a === 'number' && c === func.sum) {
    return a + b
  }
  if (typeof a === 'number') {
    return a * b
  } 
  if (Array.isArray(a)) {
    return a.map(el => el * b)
  }
}

// console.log(overloadedFunc());
// console.log(overloadedFunc(10));