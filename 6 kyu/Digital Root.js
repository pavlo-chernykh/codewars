function digitalRoot(n) {
  const arr = n.toString().split('')
  const res = arr.reduce((acc, n) => acc += +n, 0)
  if (res > 9) {
    return digitalRoot(res)
  } else {
    return res
  }
}

const test = digitalRoot(16);
console.log(test);