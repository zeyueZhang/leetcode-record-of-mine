/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const deep = function (root, preSum) {
  if (root === null) {
    return 0;
  }
  let sum = preSum * 10 + root.val
  const left = root.left,
    right = root.right
  if(left === null && right === null) {
    return sum
  }else {
    return deep(root.left, sum) + deep(root.right, sum)
  }
}

var sumNumbers = function (root) {
 
  return deep(root, 0);
}



/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * 广度优先
var sumNumbers = function (root) {
  if (root === null) {
    return 0;
  }
  let sum = 0;
  const nodeArr = [],
    numArr = [];
  nodeArr.push(root)
  numArr.push(root.val)

  while(nodeArr.length) {
    const targetNode = nodeArr.pop()
    const targetNum = numArr.pop()
    const left = targetNode.left,
      right = targetNode.right
    if(left === null && right === null) {
      sum += targetNum
    }else {
      if(right !== null) {
        nodeArr.push(right)
        numArr.push(targetNum * 10 + right.val)
      }
      if(left !== null) {
        nodeArr.push(left)
        numArr.push(targetNum * 10 + left.val)
      }
    }
  }
  return sum;
}
*/
// @lc code=end