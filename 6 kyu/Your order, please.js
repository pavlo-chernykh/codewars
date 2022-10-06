//Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.

// to find number in a element let num = x.find(el=>parseInt(el))

function order(words){
  let arr = words.split(' ')
  let r = []

  arr.forEach(word=>{
    let splittedWord = word.split('')
    let num = splittedWord.find(el=>parseInt(el))
    
    r.push([word,+num])
  })

  r.sort((a,b)=>a[1]-b[1]).map(x=> x.splice(1,1))
  return r.join(' ')
}

const res = order("is2 Thi1s T4est 3a"); // "Thi1s is2 3a T4est"

console.log(res);
