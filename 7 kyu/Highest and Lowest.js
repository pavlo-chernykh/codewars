function highAndLow(numbers){
  const arr = numbers.split(' ');
  let high = arr[0];
  let low = arr[0];
  arr.forEach(element => {
    if (+element > +high) {
      high = element;
    }
    if (+element < +low) {
      low = element;
    }
  });
  return `${high} ${low}`
}
const res = highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");  // return "42 -9"

//

function highAndLow2(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}


