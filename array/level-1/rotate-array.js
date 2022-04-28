/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  const length = nums.length;
  const adjK = k > length ? k % length : k;
  const map = {};
  for (let i = 0; i < length; i++) {
      const newIdx = i + adjK - length >= 0
          ? i + adjK - length
          : i + adjK;
      if (!map[newIdx] && newIdx >= adjK) {
          map[newIdx] = nums[newIdx];
      }
      nums[newIdx] = map[i] !== undefined ? map[i] : nums[i];
  }
};