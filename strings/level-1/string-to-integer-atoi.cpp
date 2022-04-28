#include<stack>
class Solution {
public:
  int myAtoi(string s) {
    queue<int> q;
    int start = 0;
    while (s[start] == ' ') {
      start += 1;
    }
    int sign = 1;
    if (s[start] == '-') {
      sign = -1;
      start += 1;
    } else if (s[start] == '+') {
      start += 1;
    }
    if (!isdigit(s[start])) {
      return 0;
    }
    for (int i = start; i < s.size(); i += 1) {
      if (isdigit(s[i])) {
        q.push(s[i] - '0');
      } else {
        break;
      }
    }
    int res = 0;
    while (!q.empty()) {
      int digit = q.front();
      q.pop();
      if ((INT32_MAX / 10 == res && INT32_MAX % 10 < digit) || res > INT32_MAX / 10) {
        if (sign == 1) return INT32_MAX;
        return INT32_MIN;
      }
      res = res * 10 + digit;
    }
    return res * sign;
  }
};