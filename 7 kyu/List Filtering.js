function filter_list(l) {
  return [...l.filter(el => Number.isInteger(el))]
}

const res = filter_list([1,2,'a','b']) // [1,2]