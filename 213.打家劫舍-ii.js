/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length
  if(len === 1) {
    return nums[0]
  }else if(len === 2) {
    return Math.max(nums[0], nums[1])
  }

  const robRange = (nums, start, end) => {
    let first = nums[start], second = Math.max(nums[start], nums[start + 1]);
    for (let i = start + 2; i <= end; i++) {
        const temp = second;
        second = Math.max(first + nums[i], second);
        first = temp;
    }
    return second;
  }
  return Math.max(robRange(nums, 0, len - 2), robRange(nums, 1, len - 1));
};
// @lc code=end

