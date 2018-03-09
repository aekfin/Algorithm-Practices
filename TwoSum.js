// https://leetcode.com/problems/two-sum/description/

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

console.log(TwoSum([3, 7, 11, 19], 22))
