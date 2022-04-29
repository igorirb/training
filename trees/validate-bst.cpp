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
    int findMax(TreeNode* root) {
        while (root->right != NULL) {
            root = root->right;
        }
        return root->val;
    }
    int findMin(TreeNode* root) {
        while (root->left != NULL) {
            root = root->left;
        }
        return root->val;
    }
    bool isValidBST(TreeNode* root) {
        if (root == NULL) return true;
        if (root->left != NULL) {
            if (root->left->val >= root->val) return false;
            int maxLeft = findMax(root->left);
            if (maxLeft >= root->val) return false;
        }
        if (root->right != NULL) {
            if (root->right->val <= root->val) return false;
            int minRight = findMin(root->right);
            if (minRight <= root->val) return false;
        }
        bool validLeft = isValidBST(root->left);
        bool validRight = isValidBST(root->right);
        return validLeft && validRight;
    }
};