// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l) {
    let size = 0;
    let pointer = l;
    while (pointer !== null) {
        size += 1;
        pointer = pointer.next;
    }
    let map = {};
    let index = 1;
    pointer = l;
    while (index <= size / 2) {
        map[size - index + 1] = pointer.value;
        index += 1;
        pointer = pointer.next;
    }
    if (size % 2 !== 0) {
        index += 1;
        pointer = pointer.next;
    }
    while (index <= size) {
        if (map[index] !== pointer.value) {
            return false;
        }
        index += 1;
        pointer = pointer.next;
    }
    return true;
}
