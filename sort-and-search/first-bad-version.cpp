// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int findFirst(uint min, uint max) {
        uint mid = (min + max) / 2;
        if (min == max) return mid;
        bool testMid = isBadVersion(mid);
        if (testMid) {
            return findFirst(min, mid);
        }
        return findFirst(mid + 1, max);
    }
    int firstBadVersion(int n) {
        bool testN = isBadVersion(n);
        if (testN) {
            return findFirst(1, n);
        }
        return findFirst(n, INT_MAX);
    }
};