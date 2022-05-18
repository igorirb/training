class Solution {
public:
    void convertToBinary(int n, vector<int>& vec) {
        while (n > 0) {
            if (n % 2 == 1) {
                vec.push_back(1);
                n = (n - 1) / 2;
            } else {
                vec.push_back(0);
                n = n / 2;
            }
        }
    }
    int hammingDistance(int x, int y) {
        vector<int> binB;
        vector<int> binS;
        int big = x >= y ? x : y;
        int small = x < y ? x : y;
        convertToBinary(big, binB);
        convertToBinary(small, binS);
        int bSize = binB.size();
        int sSize = binS.size();
        int count = 0;
        for (int i = bSize - 1; i >= 0; i -= 1) {
            if (i > sSize - 1) {
                if (binB[i] == 1) {
                    count += 1;
                }
            } else if (binB[i] != binS[i]) {
                count += 1;
            }
        }
        return count;
    }
};