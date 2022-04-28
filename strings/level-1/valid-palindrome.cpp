class Solution {
public:
  bool isPalindrome(string s) {
    // if (!s.size()) return true;
    // regex rgx("[^a-zA-Z0-9]*");
    // s = regex_replace(s, rgx, "");
    // if (!s.size()) return true;
    // int size = s.size();
    // for (int i = 0; i < size / 2; i += 1) {
    //   if (s[i] - 'a' < 0) {
    //     s[i] = s[i] - 'A' + 'a';
    //   }
    //   if (s[size - 1 - i] - 'a' < 0) {
    //     s[size - 1 - i] = s[size - 1 - i] - 'A' + 'a';
    //   }
    //   if (s[i] != s[size - 1 - i]) {
    //     return false;
    //   }
    // }
    // return true;
    int left, right;
    int size = s.size();
    left = 0;
    right = size - 1;
    while (left < right) {
      if (!isalnum(s[left])) {
        left += 1;
        continue;
      }
      if (!isalnum(s[right])) {
        right -= 1;
        continue;
      }
      if (tolower(s[left]) != tolower(s[right])) {
        return false;
      }
      left += 1;
      right -= 1;
    }
    return true;
  }
};