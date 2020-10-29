/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  if(!arr.length) return false
  const repeatObj = {}
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if(repeatObj[item]) {
      repeatObj[item]++
    }else {
      repeatObj[item] = 1
    }
  }
  const arrSet = new Set()
  for (let keys in repeatObj) {
    arrSet.add(repeatObj[keys])
  }
  return arrSet.size === Object.keys(repeatObj).length
};
// @lc code=end

