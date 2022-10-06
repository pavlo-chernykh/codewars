//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  const zeroes = []
  const filteredArr = arr.filter(el=> {
    if (el === 0) {
      zeroes.push(0)
    }
    return el !== 0
  })
  return [...filteredArr, ...zeroes]
}

// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

//

const moveZeros2 = (arr) => [...arr.filter(x => x !== 0),...(arr.filter(x => x === 0))];

console.log(moveZeros2([false,1,0,1,2,0,1,3,"a"]));