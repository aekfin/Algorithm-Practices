// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

function Median (arr1, arr2) {
  var size = arr1.length + arr2.length
  var median = null
  var i1 = 0
  var i2 = 0
  for (var i = 0; i < parseInt(size / 2) + 1; i++) {
    if (i1 < arr1.length && i2 < arr2.length) {
      if (arr1[i1] < arr2[i2]) {
        median = arr1[i1++]       
      } else {
        median = arr2[i2++]
      }
    } else {
      if (i1 > arr1.length) {
        median = arr1[i1++]
      } else {
        median = arr2[i2++]
      }
    }
  }
  if (size % 2 === 0) {
    return (arr1[--i1] < arr2[--i2]) ? (median + arr1[i1]) / 2 : (median + arr2[i2]) / 2
  } else {
    return median
  }
}

var arr1 = [1, 2]
var arr2 = [3, 4]
console.log(Median(arr1, arr2))

