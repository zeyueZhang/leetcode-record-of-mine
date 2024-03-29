/*
 * @lc app=leetcode.cn id=1006 lang=javascript
 *
 * [1006] 笨阶乘
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
  const stack = [N--]
  let index = 0
  while(N > 0) {
    if(index % 4 === 0) {
      stack.push(stack.pop() * N)
    }else if(index % 4 === 1) {
      const cur = stack.pop()
      stack.push(cur > 0 ? Math.floor(cur / N) : Math.ceil(cur / N))
    }else if(index % 4 === 2) {
      stack.push(N)
    }else {
      stack.push(-N)
    }
    index++
    N--
  }

  return stack.reduce((a, b) => a + b)
};
// @lc code=end

