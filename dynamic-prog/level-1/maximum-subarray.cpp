class Solution {
public:
    // Kadane's Algorithm
    int maxSubArray(vector<int>& nums) {
        int size = nums.size();
        int sum = nums[0];
        int tempSum = nums[0];
        for (int i = 1; i < size; i += 1) {
            if (nums[i] > tempSum && tempSum < 0) {
                tempSum = nums[i];
            } else {
                tempSum += nums[i];
            }
            if (tempSum > sum) {
                sum = tempSum;
            }
        }
        return sum;
    }
};