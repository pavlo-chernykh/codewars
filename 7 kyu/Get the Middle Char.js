function getMiddle(s) {
  let res = ''
  const array = [...s];
  const length = array.length + 1
  if (s.length === 1) {
    return res += s
  }
  for (let i = 1; i < length; i++) {
    const middle = Math.floor(s.length/2);
    if (i === middle) {
      if (s.length % 2 === 0) {
        res += (array[middle - 1] + array[middle]);
      } else {
        res += (array[middle]);
      }
    }
  }
  return res
}

const result = getMiddle("A");

//

function getMiddle(s)
{
  let middle = Math.floor(s.length/2);
  
  return s.length % 2 === 0
        ? s.slice(middle-1, middle+1)
        : s.slice(middle, middle+1);
  
}