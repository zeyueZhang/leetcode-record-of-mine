/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const t = [];
  const ans = [];
  const n = nums.length;
  const dfs = (cur) => {
      if (cur === nums.length) {
          ans.push(t.slice());
          return;
      }
      t.push(nums[cur]);
      dfs(cur + 1, nums);
      t.pop(t.length - 1);
      dfs(cur + 1, nums);
  }
  dfs(0, nums);
  return ans;
};
// @lc code=end

