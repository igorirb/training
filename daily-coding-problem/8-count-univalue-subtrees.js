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
 * @return {number}
 */
const sumArray = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }
    return sum;
}
const count = function(node) {
    if (!node) return [0, 0, 0];
    if (!node.left && !node.right) return [1, 0, 0];
    const left = count(node.left);
    const right = count(node.right);
    let sum = 0;
    if (!node.left) {
        if (node.right.val === node.val && right[0] > 0) {
            sum += 1;
        }
    } else if (!node.right) {
        if (node.left.val === node.val && left[0] > 0) {
            sum += 1;
        }
    } else if (node.right.val === node.val && right[0] > 0 && node.left.val === node.val && left[0] > 0) {
        sum += 1;
    }
    return [sum, sumArray(left), sumArray(right)];
}
var countUnivalSubtrees = function(root) {
    return sumArray(count(root));
};