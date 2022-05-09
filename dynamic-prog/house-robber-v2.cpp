// This solution resulted in time limit exceeded
// This time I am using a map to store calculated indexes
class Solution {
public:
    int rob(vector<int>& nums, map<int, int>& map, int size, int curIndex) {
        if (curIndex < size) {
            int rob1;
            if (map[curIndex + 2] >= 0) {
                rob1 = map[curIndex + 2];
            } else {
                rob1 = rob(nums, map, size, curIndex + 2);
            }
            int rob2;
            if (map[curIndex + 3] >= 0) {
                rob2 = map[curIndex + 3];
            } else {
                rob2 = rob(nums, map, size, curIndex + 3);
            }
            map[curIndex] = nums[curIndex] + max(rob1, rob2);
            return map[curIndex];
        }
        return 0;
    }
    int rob(vector<int>& nums) {
        int size = nums.size();
        map<int, int> map;
        // I had to initialize the map because in C++ all map positions
        // are initialized with number 0 by default.
        for (int i = 0; i < size + 3; i += 1) map[i] = -1;
        int rob1 = rob(nums, map, size, 0);
        int rob2 = rob(nums, map, size, 1);
        return max(rob1, rob2);
    }
};