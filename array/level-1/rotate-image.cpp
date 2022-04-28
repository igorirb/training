#include <vector>
class Solution {
public:
  void rotate(vector<vector<int>>& matrix) {
    int size = matrix.size();
    for (int i = 0; i < (size + 1) / 2; i += 1) {
      for (int j = 0; j < size / 2; j += 1) {
        int aux = matrix[i][j]; // 00 01 10
        matrix[i][j] = matrix[size - 1 - j][i]; // 00=30 01=20 10=31
        matrix[size - 1 - j][i] = matrix[size - 1 - i][size - 1 - j]; // 30=33 20=32 31=23
        matrix[size - 1 - i][size - 1 - j] = matrix[j][size - 1 - i]; // 33=03 32=13 23=02
        matrix[j][size - 1 - i] = aux; // 03=00 13=00 02=10
      }
    }
  }
};