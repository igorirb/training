// This solution will exceed time limit
//
// This time I am checking if n is divisible
// by one of the prime numbers found so far.
class Solution {
public:
    bool isPrime(int n, vector<int>& primes) {
        if (n <= 1) return false;
        bool result = true;
        int size = primes.size();
        for (int i = 0; i < size; i += 1) {
            if (n % primes[i] == 0) {
                result = false;
                break;
            }
        }
        if (result) {
            primes.push_back(n);
        }
        return result;
    }
    int countPrimes(int n) {
        vector<int> primes;
        int count = 0;
        for (int i = 2; i < n; i += 1) {
            if (isPrime(i, primes)) {
                count += 1;
            }
        }
        return count;
    }
};