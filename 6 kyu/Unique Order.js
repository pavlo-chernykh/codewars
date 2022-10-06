// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']

const uniqueInOrder = (iterable) => {
  return [...iterable].filter((item, i) => {
    console.log([...iterable]);
    return iterable[i] !== iterable[i + 1]
  })
}

uniqueInOrder('AAAABBBCCDAABBB');