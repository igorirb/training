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
 var zigzagLevelOrder = function(root) {
  const res = [];
  if (!root) return res;
  let queue = [root];
  let moveLeft = true;
  while (queue.length > 0) {
      const children = [];
      for (let node of queue) {
          if (node.left) children.push(node.left);
          if (node.right) children.push(node.right);
      }
      if (moveLeft) {
          res.push(queue.map(q => q.val));
      } else {
          res.push(queue.map(q => q.val).reverse());
      }
      queue = children;
      moveLeft = !moveLeft;
  }
  return res;
};