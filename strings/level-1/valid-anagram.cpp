class Solution {
public:
  bool isAnagram(string s, string t) {
    // int sizeS = s.size();
    // for (int i = 0; i < sizeS; i += 1) {
    //   int sizeT = t.size();
    //   for (int j = 0; j < sizeT; j += 1) {
    //     if (s[i] == t[j]) {
    //       t.erase(j, 1);
    //       break;
    //     }
    //   }
    //   if (t.size() == 0 && i < sizeS - 1) {
    //     return false;
    //   }
    // }
    // if (t.size() == 0) {
    //   return true;
    // }
    // return false;
    if (s.size() != t.size()) return false;
    map<char, int> map;
    for (auto c: s) {
      map[c] += 1;
    }
    for (auto c: t) {
      if (map[c]) {
        map[c] -= 1;
      } else {
        return false;
      }
    }
    return true;
  }
};