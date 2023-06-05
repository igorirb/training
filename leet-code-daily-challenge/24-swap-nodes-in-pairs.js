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
var swapPairs = function(head) {
  let i = 0;
  let buffer1 = head;
  let buffer2 = head;
  let it = head;
  while (!!it) {
      i += 1;
      if (i % 2 === 0) {
          buffer2.next = it.next;
          it.next = buffer2;
          if (i === 2) {
              head = it;
          } else {
              buffer1.next = it;
          }
          buffer1 = it;
          buffer2 = buffer1.next;
          it = buffer2.next;
      } else {
          buffer1 = buffer2;
          buffer2 = it;
          it = it.next;
      }
  }
  return head;
};