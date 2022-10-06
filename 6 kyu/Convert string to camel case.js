// "the-stealth-warrior" => "theStealthWarrior"
function toCamelCase(str){
  const arr = str.search(/[-]/) !== -1 ? str.split('-') : str.split('_')
  return arr.map((el, i) => {
    if (i !== 0) {
      return el.split('')[0].toUpperCase() + el.substring(1)
    } else {
      return el
    }
  }).join('')
}

const res = toCamelCase("the_stealth_warrior");
console.log(res);
