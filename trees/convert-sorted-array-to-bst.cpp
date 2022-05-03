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
    void addNode(TreeNode** root, int val) {
        if ((*root) == NULL) {
            TreeNode* newNode = new TreeNode();
            newNode->val = val;
            newNode->left = NULL;
            newNode->right = NULL;
            (*root) = newNode;
            return;
        } else if ((*root)->val > val) {
            addNode(&(*root)->left, val);
        } else if ((*root)->val < val) {
            addNode(&(*root)->right, val);
        }
        return;
    }
    void loop(TreeNode** root, vector<int>& nums, int min, int max) {
        int mid = (min + max) / 2;
        addNode(root, nums[mid]);
        if (mid != min && mid != max) {
            loop(root, nums, min, mid);
            loop(root, nums, mid, max);
        }
    }
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        TreeNode* root = NULL;
        int size = nums.size();
        if (size == 0) return root;
        loop(&root, nums, 0, size);
        return root;
    }
};