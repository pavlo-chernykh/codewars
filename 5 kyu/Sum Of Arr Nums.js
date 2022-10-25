function arrayHashSum(arr, k) {               // Difficulty: O(n); Memory Used: O(n)
  const hash = new Set();
    for (let i = 0; i < arr.length; i++) {
      let numberToFind = k - arr[i];
      if (hash.has(numberToFind)) {
        return [numberToFind, arr[i]]
      } else {
        hash.add(arr[i])
      }
      
    }
  return []
}

function arrayPointersSum(arr, k) {  // Difficulty: O(n); Memory Used: O(1);
  let l = 0
  let r = arr.length - 1;
  while(l < r) {
    const sum = arr[l] + arr[r];
    if (sum === k) {
      return [arr[l], arr[r]];
    }
    if (sum < k) {
      l++
    } else {
      r--
    }
  }

  return []
}

// console.log(arrayHashSum([-9,-5,-2,-1,1,4,9,11], 6)) // [ -1, 4 ]
// console.log(arrayPointersSum([-9,-5,-2,-1,1,4,9,11], 3)) // [ -1, 4 ]


// bonus (if no k in arr, find closest to k)

function arrayClosestPointersSum(arr, k) {  // Difficulty: O(n); Memory Used: O(1);
  let l = 0
  let r = arr.length - 1;
  let res = [];
  while(l < r) {
    const sum = arr[l] + arr[r];
    if (sum === k) {
      return res = [arr[l], arr[r]];
    }
    if (sum < k) {
      res = [arr[l], arr[r]]
      l++
    } else {
      res = [arr[l], arr[r]]
      r--
    }
  }
  return res
}

console.log(arrayClosestPointersSum([-9,-4,-2,-1,1,4,9,11], 4))