/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
const inorderTraversal = function(node, array) {
    if (!node) return;
    inorderTraversal(node.left, array);
    array.push(node);
    inorderTraversal(node.right, array);
}
var inorderSuccessor = function(root, p) {
    const inorder = [];
    inorderTraversal(root, inorder);
    const pIdx = inorder.indexOf(p);
    if (pIdx + 1 === inorder.length) {
        return null;
    }
    return inorder[pIdx + 1];
};