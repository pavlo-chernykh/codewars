// takes 2 arrays, returns a new array consisting only of numeric elements of arrays arr1 and arr2.

function combineArray(arr1, arr2) {
  return [...arr1.filter(el => typeof el === 'number'), ...arr2.filter(el => typeof el === 'number')]
}

console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));  // [12, 22, -8, 6, 15]