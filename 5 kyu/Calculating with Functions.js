// seven(times(five())); // must return 35
function zero(cb) {
  return cb ? cb(0) : 0
}
function one(cb) {
  return cb ? cb(1) : 1
}
function two(cb) {
  return cb ? cb(2) : 2
}
function three(cb) {
  return cb ? cb(3) : 3
}
function four(cb) {
  return cb ? cb(4) : 4
}
function five(cb) {
  return cb ? cb(5) : 5
}
function six(cb) {
  return cb ? cb(6) : 6
}
function seven(cb) {
  return cb ? cb(7) : 7
}
function eight(cb) {
  return cb ? cb(8) : 8
}
function nine(cb) {
  return cb ? cb(9) : 9
}

function plus(a) {
  return (b) => {
    return a + b;
  }
}
function minus(a) {
  return (b) => {
    return b - a;
  }
}
function times(a) {
  return (b) => {
    return a * b;
  }
}
function dividedBy(a) {
  return (b) => {
    return b >= a ? Math.floor(b / a) : 0
  }
}


console.log(seven(times(five()))) // 35