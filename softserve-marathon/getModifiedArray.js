// getModifiedArray([12, 6, 22, 0, -8])); // [‘Start’, 6, 22, 0, ‘End’]
//initial array should NOT be changed

function getModifiedArray(array) {
  const copy = [...array]
  copy.pop()
  copy.shift()
  return ['Start', ...copy, 'End']
}

console.log(getModifiedArray([12, 6, 22, 0, -8]));