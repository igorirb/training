class Solution {
public:
    void reverseString(vector<char>& s) {
      int size = s.size();
      for (int i = 0; i < size / 2; i += 1) {
        char aux = s[i];
        s[i] = s[size - 1 - i];
        s[size - 1 - i] = aux;
      }
    }
};