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
  if (preorder.length === 0 || inorder.length === 0) return null;
  let idx = 0;
  let val = preorder[idx];
  let inIdx = inorder.indexOf(val);
  while (inIdx === -1) {
      idx += 1;
      val = preorder[idx];
      inIdx = inorder.indexOf(val);
  }
  if (inIdx === -1) return null;
  const left = inorder;
  const right = left.splice(inIdx + 1);
  left.pop();
  const leftTree = buildTree(preorder.slice(1), left);
  const rightTree = buildTree(preorder.slice(1), right);
  const root = new TreeNode(val, leftTree, rightTree);
  return root;
};