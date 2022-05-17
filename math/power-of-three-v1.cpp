// Solution using loop
class Solution {
public:
    bool isPowerOfThree(int n) {
        if (n < 0) return false;
        bool result = false;
        for (long test = 1; test <= n; test *= 3) {
            if (test == n) {
                result = true;
            }
        }
        return result;
    }
};