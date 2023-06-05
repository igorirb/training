/**
 * Using merge sort & fast/slow pointer
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
function findMiddle(pointer){
    let slow = pointer;
    let fast = pointer;
    let prev = pointer;
    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    return slow;
}
function merge(left, right) {
    let head = new ListNode();
    let pointer = head;
    while (left && right) {
        if (left.val <= right.val) {
            const aux = left.next;
            left.next = null;
            pointer.next = left;
            left = aux;
        } else {
            const aux = right.next;
            right.next = null;
            pointer.next = right;
            right = aux;
        }
        pointer = pointer.next;
    }
    if (left) {
        pointer.next = left;
    } else {
        pointer.next = right;
    }
    return head.next;
}
var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    const middle = findMiddle(head);
    const left = sortList(head);
    const right = sortList(middle);
    return merge(left, right);
};