// https://leetcode.com/problems/regular-expression-matching/description/

function isMatch (str1, str2) {
  var arr1 = str1.split('')
  var arr2 = str2.split('')
  var i1 = 0
  var i2 = 0
  while (i1 < arr1.length || i2 < arr2.length) {
    if (arr1[i1] !== '*' && arr2[i2] !== '*') {
      if (arr1[i1] !== arr2[i2] && arr1[i1] !== '.' && arr2[i2] !== '.') {
        return false
      } else {
        if (arr1[i1] === '.' && arr2[i2] === '.') {
          arr1[i1] = null
          arr2[i2] = null
        } else {
          if (arr1[i1] === '.') {
            arr1[i1] = arr2[i2]
          } else {
            arr2[i2] = arr1[i1]
          }
        }
      }
    } else {
      if (arr1[i1] !== '*' && arr2[i2] === '*') {
        if (i2 > 0) {
          if (arr2[i2 - 1] < arr1[i1].charCodeAt(0)) {
            if (arr1.length < arr2.length) {
              arr2.splice(i2, 1)
            } else {
              return false
            }
          }
        } else {
          return false
        }
      } else if (arr1[i1] === '*' && arr2[i2] !== '*') {
        if (i1 > 0) {
          if (arr1[i1 - 1] < arr2[i2].charCodeAt(0)) {
            if (arr2.length < arr1.length) {
              arr1.splice(i1, 1)
            } else {
              return false
            }
          }
        } else {
          return false
        }
      }
    }
    i1++
    i2++
  }
  return true
}

console.log(isMatch("aa","a"))
console.log(isMatch("aa","aa"))
console.log(isMatch("aaa","aa"))
console.log(isMatch("aa", "a*"))
console.log(isMatch("aa", ".*"))
console.log(isMatch("ab", ".*"))
console.log(isMatch("aab", "c*a*b"))

