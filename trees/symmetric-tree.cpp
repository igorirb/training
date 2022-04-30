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
    bool isEqual(TreeNode* leftNode, TreeNode* rightNode) {
        if (leftNode == NULL && rightNode != NULL) return false;
        if (leftNode != NULL && rightNode == NULL) return false;
        if (leftNode == NULL && rightNode == NULL) return true;
        bool check1 = (leftNode->val == rightNode->val);
        bool check2 = isEqual(leftNode->left, rightNode->right);
        bool check3 = isEqual(leftNode->right, rightNode->left);
        return check1 && check2 && check3;
    }
    bool isSymmetric(TreeNode* root) {
        return isEqual(root->left, root->right);
    }
};