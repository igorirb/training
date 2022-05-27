/**
 * IMPORTANT!!!
 * The division in Javascript doesn't work like C++
 * - Javascript: 7 / 10 = 0.7
 * - C++: 7 / 10 = 0
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let res = null;
  let resAux = null;
  let l1aux = l1;
  let l2aux = l2;
  let carry = 0;
  while(l1aux || l2aux) {
      let sum = carry;
      if (l1aux) {
          sum += l1aux.val;
          l1aux = l1aux.next;
      }
      if (l2aux) {
          sum += l2aux.val;
          l2aux = l2aux.next;
      }
      if (Math.floor(sum / 10) > 0) {
          carry = 1;
          sum = sum % 10;
      } else {
          carry = 0;
      }
      if (!res) {
          res = new ListNode(sum);
          resAux = res;
      } else {
          const node = new ListNode(sum);
          resAux.next = node;
          resAux = node;
      }
  }
  if (carry === 1) {
      const node = new ListNode(carry);
      resAux.next = node;
  }
  return res;
};