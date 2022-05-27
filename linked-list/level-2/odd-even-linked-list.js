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
var oddEvenList = function(head) {
  if (!head) return head;
  let lastOdd = head;
  let firstEven = head.next;
  let i = 2;
  let aux = head.next;
  while (aux) {
      if (i % 2 === 0 && aux.next) {
          lastOdd.next = aux.next;
          aux.next = aux.next.next;
          lastOdd.next.next = firstEven;
          lastOdd = lastOdd.next;
          i += 1;
      }
      aux = aux.next;
      i += 1;
  }
  return head;
};