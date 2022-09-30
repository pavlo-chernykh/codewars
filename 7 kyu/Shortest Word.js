function findShort(s){
  const arr = s.split(' ').map(word => {
    return word.length
  })
  const res = Math.min(...arr)
  return res
}
function findShort2(s){
  return Math.min(...s.split(' ').map(w => w.length))
}

const findShort3 = s =>  Math.min(...s.split(' ').map(w => w.length))

const res = findShort3("bitcoin take over the world maybe who knows perhaps") // 3
console.log(res);