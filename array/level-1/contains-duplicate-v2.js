/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i += 1) {
      if (set.has(nums[i])) return true;
      set.add(nums[i], 1);
  }
  return false;
};