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
 * @return {number[][]}
 */
function dfs(node, depth, result) {
    if (!node) return;
    if (!result[depth]) {
        result[depth] = [];
    }
    if (depth % 2 === 0) {
        result[depth].push(node.val);
    } else {
        result[depth].unshift(node.val);
    }
    dfs(node.left, depth + 1, result);
    dfs(node.right, depth + 1, result);
  }
  
  var zigzagLevelOrder = function(root) {
    const result = [];
    dfs(root, 0, result);
    return result;
  };