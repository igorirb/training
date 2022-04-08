#include <iostream>
#include <vector>

using namespace std;

class Solution {
  public:
    int search(vector<int>& nums, int target) {
      if (nums.size() == 1 && nums[0] == target) {
        return 0;
      }

      int left = 0;
      int right = nums.size() - 1;
      while (left <= right) {
        int mid = (left + right) / 2;
        if (target > nums[mid]) {
          left = mid + 1;
        } else if (target < nums[mid]) {
          right = mid - 1;
        } else {
          return mid;
        }
      }
      return -1;
    }
};

int main() {
  Solution s;
  vector<int> v = {2, 5};
  int target = 5;
  int result = s.search(v, target);
  printf("%s\n", result == 1 ? "true" : "false");

  v = {-1, 0, 3, 5, 6, 9};
  target = 1;
  result = s.search(v, target);
  printf("%s\n", result == -1 ? "true" : "false");

  return 0;
}