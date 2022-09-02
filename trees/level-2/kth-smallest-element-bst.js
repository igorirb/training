/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const bst = function(node, array) {
    if (!node) return;
    bst(node.left, array);
    array.push(node.val);
    bst(node.right, array);
}
var kthSmallest = function(root, k) {
    const inorder = [];
    bst(root, inorder);
    return inorder[k - 1];
};