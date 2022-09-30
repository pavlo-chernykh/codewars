// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {  
  return a.filter(item => !b.includes(item))
}

/// no repeat
// function arrayDiff(a, b) {  
//   return [...new Set(a.filter(item => !b.includes(item)))]
// }



const res = arrayDiff([1,2,2], [2]) // [1]
console.log(res);