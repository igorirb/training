/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const n = nums.length;
  let oneIsPresent = false;
  for (let i = 0; i < n; i += 1) {
      if (nums[i] === 1) {
          oneIsPresent = true;
          break;
      }
  }
  if (!oneIsPresent) return 1;
  for (let i = 0; i < n; i += 1) {
      if (nums[i] <= 0 || nums[i] > n) {
          nums[i] = 1;
      }
  }
  for (let i = 0; i < n; i += 1) {
      const curr = Math.abs(nums[i]);
      if (curr === n) {
          nums[0] = (-1) * Math.abs(nums[0]);
      } else {
          nums[curr] = (-1) * Math.abs(nums[curr]);
      }
  }
  for (let i = 1; i < n; i += 1) {
      if (nums[i] > 0) {
          return i;
      }
  }
  if (nums[0] > 0) {
      return n;
  }
  return n + 1;
};