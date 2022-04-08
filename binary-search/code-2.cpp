#include <iostream>
#include <vector>

using namespace std;

class Solution {
  int bfs(vector<int>& nums, int start, int end, int target) {
    if (start > end) {
      return -1;
    }
    if (nums[start] == target) {
      return start;
    }
    if (nums[end] == target) {
      return end;
    }
    int mid = (start + end) / 2;
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] > target) {
      return bfs(nums, start + 1, mid - 1, target);
    }
    if (nums[mid] < target) {
      return bfs(nums, mid + 1, end - 1, target);
    }
    return -1;
  }

  public:
    int search(vector<int>& nums, int target) {
      return bfs(nums, 0, nums.size() - 1, target);
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