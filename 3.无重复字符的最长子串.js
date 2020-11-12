/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const newSet = new Set(),
    n = s.length
  let rk = -1, target = 0;
  for(let i = 0; i < n; i++) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      newSet.delete(s[i - 1]);
    }
    while(rk + 1 < n && !newSet.has(s[rk + 1])) {
      newSet.add(s[rk + 1])
      ++rk
    }
    target = Math.max(target, rk - i + 1)
  }
  return target;
};
// @lc code=end

