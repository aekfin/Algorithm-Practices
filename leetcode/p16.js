var threeSumClosest = function(nums, target) {
    let min = null
    let diffMin = null
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k]
                if (diffMin === null || diffMin > Math.abs(target - sum)) {
                    diffMin = Math.abs(target - sum)
                    min = sum
                }
            }
        }
    }
    return min
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))