/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  debugger
  let count = 1,
    i = 1
  while(i < nums.length) {
    const item = nums[i],
      prevItem = nums[i - 1]
    if(item === prevItem) {
      count++
    }else {
      count = 1
    }
    if(count > 2) {
      nums.splice(i--,1)
    }
    i++
  }
};
removeDuplicates([1,1,1,2,2,3])
// @lc code=end

