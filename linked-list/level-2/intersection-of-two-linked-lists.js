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
    for (let auxA = headA; auxA != null; auxA = auxA.next) {
        for (let auxB = headB; auxB != null; auxB = auxB.next) {
            if (auxA === auxB) return auxA;
        }
    }
    return null;
};