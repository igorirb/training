class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> res = { { 1 } };
        for (int i = 1; i < numRows; i += 1) {
            vector<int> temp;
            vector<int> prev = res[i - 1];
            temp.push_back(1);
            for (int j = 0; j < prev.size() - 1; j += 1) {
                temp.push_back(prev[j] + prev[j + 1]);
            }
            temp.push_back(1);
            res.push_back(temp);
        }
        return res;
    }
};