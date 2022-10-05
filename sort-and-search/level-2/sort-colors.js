/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  const len = nums.length;
  let i = 0;
  let j = 1;
  while (i < len) {
      if (nums[i] > nums[j]) {
          let aux = nums[i];
          nums[i] = nums[j];
          nums[j] = aux;
          j = i;
      }
      j += 1;
      if (j >= len) {
          i += 1;
          j = i + 1;
      }
  }
};