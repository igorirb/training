/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int getDepth(TreeNode* root, int curDepth) {
        if (root == NULL) return curDepth;
        curDepth += 1;
        int leftDepth = getDepth(root->left, curDepth);
        int rightDepth = getDepth(root->right, curDepth);
        curDepth = leftDepth > rightDepth ? leftDepth : rightDepth;
        return curDepth;
    }
    int maxDepth(TreeNode* root) {
        return getDepth(root, 0);
    }
};