/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null;
  const val = preorder[0];
  let valIndex = -1;
  for (let i = 0; i < inorder.length; i += 1) {
      if (inorder[i] === val) {
          valIndex = i;
          break;
      }
  }
  if (valIndex === -1) return null;
  preorder.shift();
  const leftTree = buildTree(preorder, inorder.slice(0, valIndex));
  const rightTree = buildTree(preorder, inorder.slice(valIndex));
  const node = new TreeNode(val, leftTree, rightTree);
  return node;
};