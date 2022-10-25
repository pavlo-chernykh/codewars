// The function factorial(n) calculates and returns the factorial of the number n. For example factorial(4) returns 24.
// processArray fn takes the first parameter of the array arr, and the second parameter the function factorial 

function factorial(n) {
  if (n < 0) return -1;
  if (n == 0) return 1;
  return (n * factorial(n - 1));
}

function processArray(arr, factorial) {
  return arr.map(el => factorial(el))
}


