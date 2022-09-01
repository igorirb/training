/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const makeConnection = function(node, rightNode) {
    if (!node) return;
    node.next = rightNode;
    makeConnection(node.left, node.right);
    if (rightNode) {
        makeConnection(node.right, rightNode.left);
    } else {
        makeConnection(node.right, null);
    }
}
var connect = function(root) {
    makeConnection(root, null);
    return root;
};