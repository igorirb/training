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
 * @return {number[]}
 */
const inorder = function(root, arr) {
  if (root === null) return;
  inorder(root.left, arr);
  arr.push(root.val);
  inorder(root.right, arr);
}
var inorderTraversal = function(root) {
  const res = [];
  inorder(root, res);
  return res;
};