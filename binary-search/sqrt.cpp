class Solution {
public:
  int mySqrt(int x) {
    if (x < 2) return x;
    int left = 2, right = x / 2;
    while (left <= right) {
      long mid = (left + right) / 2;
      if (mid * mid == x) return mid;
      if (mid * mid < x) {
        left = mid + 1;
      } else if (mid * mid > x) {
        right = mid - 1;
      }
    }
    return right;
  }
};