function duplicateCount(text){
  const obj = {}
  let duplicateNum = 0
  const tempArr = text.toLowerCase().split('')
  tempArr.forEach(el => {
    if (!(el in obj)) {
      obj[el] = 1
    } else {
      obj[el]++
    }
  })
  const keys = Object.keys(obj);
  keys.forEach(key => {
    if (obj[key] > 1) {
      duplicateNum++
    }
  })
  return duplicateNum
}

const res = duplicateCount("Indivisibility") // 2
console.log(res); 

//

function duplicateCount2(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}