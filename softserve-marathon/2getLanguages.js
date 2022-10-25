// getLanguages should return an array of languages from students that satisfy a condition.

// getLanguages(students, student => student.age < 26) // ['English', 'Ukrainian',  'Italian', 'Russian']


let students = [{
  name: 'Anna',
  languages: ['English', 'Ukrainian'],
  age: 21
}, {
  name: 'Bob',
  languages: ['Polish', 'Spanish'], 
  age: 26 
}, { 
  name: 'Alice', 
  languages: ['Italian', 'Russian'], 
  age: 18 
}]

const getLanguages = (...params) => {
  return params.reduce((arr, cond) => {
    return arr.filter(cond)
  }).map((x) => {
    return x.languages
  }).flat();
}


// console.log(getLanguages(students));
console.log(getLanguages(students, student => student.age < 26));