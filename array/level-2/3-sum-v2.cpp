// This solution exceeds time limit
// Not using quicksort this time
class Solution {
public:    
    bool doesNotContain(vector<vector<int>> result, vector<int> initial) {
        int sizeResult = result.size();
        for (int i = 0; i < sizeResult; i += 1) {
            vector<int> curr = result[i];
            int count = 0;
            for (int j = 0; j < 3; j += 1) {
                if (curr[j] == initial[j]) {
                    count += 1;
                }
            }
            if (count == 3) {
                return false;
            }
        }
        return true;
    }
    
    void buildArray(
        vector<vector<int>>& result,
        vector<int>& nums,
        vector<int> initial,
        int currPos
    ) {
        initial.push_back(nums[currPos]);
        int size = initial.size();
        int i = size - 1;
        while (i > 0) {
            if (initial[i - 1] > initial[i]) {
                int aux = initial[i - 1];
                initial[i - 1] = initial[i];
                initial[i] = aux;
            }
            i -= 1;
        }
        if (size == 3) {
            int sum = 0;
            for (int i = 0; i < 3; i += 1) {
                sum += initial[i];
            }
            if (sum == 0) {
                if (doesNotContain(result, initial)) {
                    result.push_back(initial);
                }
            }
            return;
        }

        for (int i = currPos + 1; i < nums.size(); i += 1) {
            buildArray(result, nums, initial, i);
            buildArray(result, nums, {}, i);
        }
    }

    vector<vector<int>> threeSum(vector<int>& nums) {
        if (nums.size() < 3) return {};
        vector<vector<int>> result;
        buildArray(result, nums, {}, 0);
        return result;
    }
};