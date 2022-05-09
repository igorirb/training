// This solution resulted in time limit exceeded
class Solution {
public:
    int rob(vector<int>& nums, int size, int curIndex) {
        if (curIndex < size) {
            int rob1 = rob(nums, size, curIndex + 2);
            int rob2 = rob(nums, size, curIndex + 3);
            return nums[curIndex] + max(rob1, rob2);
        }
        return 0;
    }
    int rob(vector<int>& nums) {
        int size = nums.size();
        int rob1 = rob(nums, size, 0);
        int rob2 = rob(nums, size, 1);
        return max(rob1, rob2);
    }
};