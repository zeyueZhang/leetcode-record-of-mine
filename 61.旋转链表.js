/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) {
    return head;
  }
  let n = 1;
  let cur = head;
  // 计算链表的长度
  while (cur.next) {
    cur = cur.next;
    n++;
  }

  // 根据链表的长度计算实际需要移动几位
  // 如果add 与 n相等，则说明不需要移动
  let add = n - k % n;
  if (add === n) {
    return head;
  }

  // 形成环链表
  cur.next = head;

  // 进行移动，也就是指针的赋值
  while (add) {
    cur = cur.next;
    add--;
  }

  // 复制完成后需要把环链断开
  const ret = cur.next;
  cur.next = null;
  return ret;

};
// @lc code=end
