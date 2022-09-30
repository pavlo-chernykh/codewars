function accum(s) {
  let res = s.split('').map((a, i) => (a.toUpperCase() + a.toLowerCase().repeat(i))).join('-');
	return res
}

const res = accum("ZpglnRxqenU") // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(res);