// This solution will exceed time limit
class Solution {
public:
    bool isPrime(int n) {
        bool result = true;
        for (int i = 2; i < n; i += 1) {
            if (n % i == 0) {
                result = false;
                break;
            }
        }
        return result;
    }
    int countPrimes(int n) {
        int count = 0;
        for (int i = 2; i < n; i += 1) {
            if (isPrime(i)) {
                count += 1;
            }
        }
        return count;
    }
};