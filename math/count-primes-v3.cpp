// This solution will exceed time limit
//
// This time I am checking if n is disible by i
// up until i squared is lesser or equal to n.
class Solution {
public:
    bool isPrime(int n) {
        if (n <= 1) return false;
        bool result = true;
        for (int i = 2; i * i <= n; i += 1) {
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