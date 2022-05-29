/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    let auxA = headA;
    let auxB = headB;
    while (auxA !== auxB) {
        auxA = (auxA === null) ? headB : auxA.next;
        auxB = (auxB === null) ? headA : auxB.next;
    }
    return auxA;
};