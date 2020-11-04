/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  // const target = new Set()

  // nums1.forEach(item => {
  //   if(nums2.includes(item)) {
  //     target.add(item)
  //   }
  // })

  // return [...target]

  nums1.sort((x, y) => x - y)
  nums2.sort((x, y) => x - y)
  let index1 = 0,
    index2 = 0
  const length1 = nums1.length,
    length2 = nums2.length,
    target = []
  let preNum = null
  while(index1 < length1 && index2 < length2) {
    if(nums1[index1] > nums2[index2]) {
      index2++
    }else if(nums1[index1] < nums2[index2]) {
      index1++
    }else if(nums1[index1] === nums2[index2]) {
      if(preNum !== nums1[index1]) {
        target.push(nums1[index1])
        preNum = nums1[index1]
      }
      index1++
      index2++
    }
  }
  return target
  
};
// @lc code=end

