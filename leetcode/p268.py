class Solution:
    def missingNumber(self, nums):
        sum = 0
        total = len(nums)
        for i in range(len(nums)):
            sum = sum + nums[i]
            total = total + i
        return total - sum

print(Solution().missingNumber([3,0,1]))