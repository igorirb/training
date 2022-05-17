// This solution works
//
// This time I am using the algorithm Sieve of Eratosthenes,
// which marks as not prime all multiple of a prime number
// after it was found. Thus we don't need to repeat the process
// for numbers we already know to be not prime.
class Solution {
public:
    int countPrimes(int n) {
        if (n <= 2) return 0;
        vector<int> isPrime(n);
        for (int i = 2; i < n; i += 1) {
            isPrime[i] = 1;
        }
        for (int i = 2; i * i < n; i += 1) {
            if (isPrime[i] == 0) continue;
            for (int j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
        int count = 0;
        for (int i = 2; i < n; i += 1) {
            if (isPrime[i] == 1) count += 1;
        }
        return count;
    }
};