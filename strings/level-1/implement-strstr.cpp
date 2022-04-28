class Solution {
public:
  int strStr(string haystack, string needle) {
    int needleSize = needle.size();
    if (needleSize == 0) return 0;
    int haystackSize = haystack.size();
    for (int i = 0; i < haystackSize; i += 1) {
      if (haystackSize - i < needleSize) return -1;
      int j = 0;
      int found = true;
      while (needleSize > j) {
        if (needle[j] != haystack[i + j]) {
          found = false;
        }
        j += 1;
      }
      if (found) {
        return i;
      }
    }
    return -1;
  }
};