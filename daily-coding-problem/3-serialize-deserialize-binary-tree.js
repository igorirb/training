/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const preorder = function (node, serial) {
  if (!node) {
      serial.push('null');
  } else {
      serial.push(`${node.val}`);
      preorder(node.left, serial);
      preorder(node.right, serial);
  }
}
var serialize = function(root) {
  const serial = [];
  preorder(root, serial);
  serial.push('end');
  const str = serial.join(',');
  // 1, 2, 3, null, null, 4, 5,
  return str;
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
const insertNode = function(nodes) {
  if (nodes[0] === 'end') {
      return null;
  }
  if (nodes[0] === 'null') {
      nodes.shift(1);
      return null;
  }
  const root = new TreeNode(Number.parseInt(nodes[0]));
  nodes.shift(1);
  root.left = insertNode(nodes);
  root.right = insertNode(nodes);
  return root;
}
var deserialize = function(data) {
  const nodes = data.split(',');
  const root = insertNode(nodes);
  return root;
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/