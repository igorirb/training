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
var maxPathSum = function(root) {
    let maxSum = -Infinity;
    
    const findMaxPath = (node) => {
        if (!node) return 0;
        const left = findMaxPath(node.left);
        const right = findMaxPath(node.right);
        const sumAll = node.val + left + right;
        const sumLeft = node.val + left;
        const sumRight = node.val + right;
        maxSum = Math.max(
            maxSum,
            node.val,
            sumAll,
            sumLeft,
            sumRight,
        );
        return Math.max(node.val, sumLeft, sumRight);
    };
    findMaxPath(root);

    return maxSum;
};