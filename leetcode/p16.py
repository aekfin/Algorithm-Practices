class Solution:
    def threeSumClosest(self, nums, target):
        min = None
        diffMin = None
        for i in range(len(nums) - 2):
            for j in range(i + 1, len(nums) - 1):
                for k in range(j + 1, len(nums)):
                    sum = nums[i] + nums[j] + nums[k]
                    if diffMin == None or diffMin > abs(target - sum):
                        diffMin = abs(target - sum)
                        min = sum
        return min
print(Solution().threeSumClosest([-1, 2, 1, -4], 1))