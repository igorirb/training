// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l, k) {
  let curr = l;
  let prev;
  while (curr) {
      if (curr.value === k) {
          // if curr points to the head
          if (curr === l) {
              l = curr.next;
              curr = l;
          } else {
              prev.next = curr.next;
              curr = curr.next;
          }
      } else {
          prev = curr;
          curr = curr.next;
      }
  }
  return l;
}
