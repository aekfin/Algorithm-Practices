var missingNumber = function(nums) {
    let sum = 0
    let total = nums.length
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        total += i
    }
    return total - sum
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))