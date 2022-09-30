function disemvowel(str) {
  return str.split('').filter(el => !'aeiou'.includes(el.toLowerCase())).join('')
}

const result = disemvowel("This website is for losers LOL!");
console.log(result);



//


function disemvowel(str) {
  let newStr = ""

for (let i = 0; i < str.length; i++) {
  if ("aeiou".includes(str[i].toLowerCase())) {
    continue
  } else {
    newStr += str[i];
  }
  
}
return newStr;
}