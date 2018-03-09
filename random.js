function Random () {
  return parseInt((Math.random() * 6) + 1)
}

function FizzBuzz (limit) {
  while (--limit > 0) {
    var str = ''
    if (limit % 3 === 0) {
      str += 'Fizz'
    }
    if (limit % 5 === 0) {
      str += 'Buzz'
    }
    if (str) {
      console.log('(' + limit + ') ' + str)
    }
  }
}

function TwoSum (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (i != j && nums[i] + nums[j] === target) {
        return [ i, j ]
      }
    }
  }
  return []
}

// console.log(Random() + (Random() % 2))
// FizzBuzz(101)
console.log(TwoSum([3, 7, 11, 19], 22))
