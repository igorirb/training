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
    void preOrderTraversal(TreeNode* node, vector<TreeNode*> &vct) {
        if (node == NULL) return;
        preOrderTraversal(node->left, vct);
        vct.push_back(node);
        preOrderTraversal(node->right, vct);
    }
    
    bool isValidBST(TreeNode* root) {
        vector<TreeNode*> vct;
        preOrderTraversal(root, vct);
        for (int i = 0; i < vct.size() - 1; i += 1) {
            if (vct[i]->val >= vct[i + 1]->val) return false;
        }
        return true;
    }
};