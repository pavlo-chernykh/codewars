// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

function anagrams(word, words) {
  const res = [];
  const sortedWord = [...word].sort((a, b) => (a > b ? 1 : -1))
  words.forEach(el => {
    const splittedWord = el.split('').sort()
    if (splittedWord.toString() === sortedWord.toString()) {
      res.push(el)
    }
  });
  return res
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));


// 
let anagrams2 = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));
