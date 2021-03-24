/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// [3,1,4,2]
var find132pattern = function (nums) {
  const n = nums.length
  // 单调栈的存储
  const candidate_k = [nums[n - 1]]
  let max_k = -Number.MAX_SAFE_INTEGER;
  for (let i = n - 2; i >= 0; --i) {
    if (nums[i] < max_k) {
      return true;
    }
    // 如果这个数比2小则找到了1
    while (candidate_k.length && nums[i] > candidate_k[candidate_k.length - 1]) {
      // 将t和之前找到的比较大的比较, 如果大于之前找到的数, 之前找到的数就可以作为2, 然后一直尝试找最小的2 ,这个数t作为3
      max_k = candidate_k.pop();
    }
    // 将2的候选进入单调栈
    if (nums[i] > max_k) {
      candidate_k.push(nums[i]);
    }
  }
  return false;
};
// @lc code=end
