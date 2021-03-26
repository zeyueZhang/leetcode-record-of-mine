/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head
  const dummy = new ListNode(0, head)
  let curNode = dummy
  while (curNode.next && curNode.next.next) {
    if (curNode.next.val === curNode.next.next.val) {
      curNode.next = curNode.next.next
    } else {
      curNode = curNode.next
    }
  }
  return dummy.next
};
// @lc code=end
