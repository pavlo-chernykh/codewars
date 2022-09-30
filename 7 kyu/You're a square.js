function isSquare(n) {
  if (Number.isInteger(n = Math.sqrt(n) * Math.sqrt(n)) && Number.isInteger(Math.sqrt(n)) !== false) return true;
  return false;
}

const res = isSquare(71);



// 
const isSquare2 = n => Number.isInteger(Math.sqrt(n));

const res2 = isSquare2(0);
