// This solution exceeds time limit
class Solution {
public:
    vector<int> quicksort(vector<int> arr) {
        int size = arr.size();
        if (size == 0) {
            return arr;
        }

        int pivot = arr[size - 1];
        vector<int> lower = {};
        vector<int> greater = {};
        for (int i = 0; i < size - 1; i += 1) {
            if (arr[i] >= pivot) greater.push_back(arr[i]);
            else lower.push_back(arr[i]);
        }
        lower = quicksort(lower);
        greater = quicksort(greater);

        vector<int> result = {};
        for (int i = 0; i < lower.size(); i += 1) {
            result.push_back(lower[i]);
        }
        result.push_back(pivot);
        for (int i = 0; i < greater.size(); i += 1) {
            result.push_back(greater[i]);
        }

        return result;
    }
    
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
        if (initial.size() == 3) {
            int sum = 0;
            for (int i = 0; i < 3; i += 1) {
                sum += initial[i];
            }
            if (sum == 0) {
                vector<int> sortedArr = quicksort(initial);
                if (doesNotContain(result, sortedArr)) {
                    result.push_back(sortedArr);
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