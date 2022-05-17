// Solution using recursion
class Solution {
public:
    bool isPowerOfThree(int n) {
        if (n == 1 || n == 3) return true;
        if (n % 2 == 0 || n % 3 != 0) return false;
        if (n == 0) return false;
        return isPowerOfThree(n / 3);
    }
};