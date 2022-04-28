class Solution {
public:
    int reverse(int x) {
      int result = 0;
      while (x != 0) {
        int pop = x % 10;
        x /= 10;
        if (
          result > INT_MAX / 10
          || (
            result == INT_MAX / 10
            && pop > INT_MAX % 10
          )
        ) {
          return 0;
        } else if (
          result < INT_MIN / 10
          || (
            result == INT_MIN / 10
            && pop < INT_MIN % 10
          )
        ) {
          return 0;
        } else {
          result = result * 10 + pop;
        }
      }
      return result;
    }
};