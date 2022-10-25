// takes an array of user logins loginList  and returns the longest login\

function longestLogin(loginList) {
  let result = loginList[0]
  const res = loginList.reduce((acc, el) => {
    if (acc.length >= result.length) {
      result = acc
    }
    acc = el
    return acc
  })
  return result.length > res.length ? result : res
}




// console.log(longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]))   //  Prokopenko)
console.log(longestLogin(["maxxx", "NewUser", "admin111" , "Administrator"]));




/* function longestLogin(loginList) {
  let result = loginList[0]
  const res = loginList.reduce((acc, el) => {
    if (acc.length >= result.length) {
      result = acc
      acc = el
      return acc
    }
    return el
  })
  return result
} */