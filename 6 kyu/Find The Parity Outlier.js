function findOutlier(integers){
  return +(integers.filter(i => i % 2 !== 0).length > integers.filter(i => i % 2 === 0).length ? integers.filter(i => i % 2 === 0) : integers.filter(i => i % 2 !== 0))
}

const res = findOutlier([1, 2, 3]) // 2
console.log(res); 