// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l) {
    if (!l) {
        return true;
    }
    let slow = l;
    let fast = l.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let pointer = slow.next;
    let prev = slow;
    prev.next = null;
    while (pointer !== null) {
        const aux = pointer.next;
        pointer.next = prev;
        prev = pointer;
        pointer = aux;
    }
    let left = l;
    let right = prev;
    while (left !== null) {
        if (left.value !== right.value) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true;
}
