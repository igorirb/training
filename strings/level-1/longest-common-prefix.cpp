class Solution {
public:
  string longestCommonPrefix(vector<string>& strs) {
    int minSize = 1000;
    int strsSize = strs.size();
    if (strsSize == 1) return strs[0];
    for (int i = 0; i < strsSize; i += 1) {
      if (strs[i].size() < minSize) {
        minSize = strs[i].size();
      }
    }
    string resp = "";
    for (int i = 0; i < minSize; i += 1) {
      bool add = true;
      char c = strs[0][i];
      int j = 1;
      while (j < strsSize) {
        if (strs[j][i] != c) {
          add = false;
          break;
        }
        j += 1;
      }
      if (add) {
        resp.append(string (1, c));
      } else {
        break;
      }
    }
    return resp;
  }
};