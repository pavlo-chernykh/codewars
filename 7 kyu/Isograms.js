function isIsogram(str){
  const arr = str.split('');
  const res = [...new Set(str.toLowerCase())].length === arr.length
  return res
}

const res = isIsogram('moOse');


//

function isIsogram2(str){
  return new Set(str.toUpperCase()).size == str.length;
}