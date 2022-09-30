function descendingOrder(n){
  return +n.toString().split('').sort((a,b) => b-a).join('')
}

const res = descendingOrder(1021);

console.log(res);
