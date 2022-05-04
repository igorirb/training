class Solution {
public:
    int climbWithStore(int n, map<int, int>& store) {
        if (store[n]) return store[n];

        if (n == 1) return 1;
        if (n == 2) return 2;
        
        store[n] = climbWithStore(n - 1, store) + climbWithStore(n - 2, store);
        return store[n];
    }
    int climbStairs(int n) {
        map<int, int> store;
        return climbWithStore(n, store);
    }
};