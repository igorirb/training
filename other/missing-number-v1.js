/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  nums = nums.sort((a, b) => a - b);
  const size = nums.length;
  for (let i = 0; i < size; i += 1) {
      if (i != nums[i]) return i;
  }
  return size;
};