/**
 * Time limit exceeded
 * Using inorder traversal in a BST
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
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}
function visitNode(list, node) {
    if (!node) return list;
    const leftNode = visitNode(list, node.left);
    leftNode.next = new ListNode(node.val);
    const rightNode = visitNode(leftNode.next, node.right);
    return rightNode;
}
function addNode(root, listNode) {
    if (listNode.val <= root.val) {
        if (root.left) {
            addNode(root.left, listNode);
        } else {
            const newNode = new TreeNode(listNode.val, null, null);
            root.left = newNode;
        }
    } else if (root.right) {
        addNode(root.right, listNode);
    } else {
        const newNode = new TreeNode(listNode.val, null, null);
        root.right = newNode;
    }
}
var sortList = function(head) {
    let root = null;
    let pointer = head;
    while (pointer) {
        if (!root) {
            root = new TreeNode(pointer.val, null, null);
        } else {
            addNode(root, pointer);
        }
        pointer = pointer.next;
    }
    const newHead = new ListNode(null);
    visitNode(newHead, root);
    return newHead.next;
};