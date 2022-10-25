// filterNums([-1, 2, 4, 0, 55, -12, 3], 11, 'greater');  //[ 55]
// filterNums([-2, 2, 3, 0, 43, -13, 6], 6, 'less'); // [-2, 2, 3, 0, -13]
// By default, the number is 0, the parameter is greater.

const filterNums = (arr, num = 0, par = 'greater') => {
  if (par === 'greater') {
    return arr.filter(el => el > num)
  }
  if (par === 'less') {
    return arr.filter(el => el < num)
  }
  return arr
};

console.log(filterNums([-1, 2, 4, 0, 55, -12, 3], 11, 'greater'));