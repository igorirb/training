class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int size = prices.size();
        int minVal = pow(10, 4);
        int max = 0;
        for(int i = 0; i < size; i += 1) {
            if (prices[i] < minVal) {
                minVal = prices[i];
            }
            if (prices[i] - minVal > max) {
                max = prices[i] - minVal;
            }
        }
        return max;
    }
};