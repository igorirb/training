class Solution {
public:
    int hammingWeight(uint32_t n) {
        int count = 0;
        while (n > 0) {
            if (n % 2 == 1) {
                count += 1;
                n = (n - 1) / 2;
            } else {
                n = n / 2;   
            }
        }
        return count;
    }
};