/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  if(points.length <= K) return points
  points.sort((a, b) => Math.sqrt(a[0]**2 + a[1] ** 2) - Math.sqrt(b[0]**2 + b[1] ** 2))
  return points.slice(0, K)
};
// @lc code=end

