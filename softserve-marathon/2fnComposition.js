const upperCase = (str) => str.toUpperCase();
const tripleExclaim = (str) => `${str}!!!`;
const split = (str, separator = '_')=> str.split(separator);
const join  = (arr, separator = ' ')=> arr.join(separator);
const copy = (str) => `${str} `.repeat(2).trim()

const createComposition = (...funcs) => {
  return initialArg => {
    return funcs.reduce((acc, func) => func(acc), initialArg)
  }
}

const result = createComposition(upperCase, tripleExclaim, split, join, copy);

console.log(result("by_ticket_now"));  //  BY TICKET NOW!!! BY TICKET NOW!!!

	
