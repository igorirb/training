/**
 * Using bubble sort to sort the array
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const size = nums.length;
  for (let i = 0; i < size; i += 1) {
    for (let j = i + 1; j < size; j += 1) {
      if (nums[i] > nums[j]) {
        const aux = nums[j];
        nums[j] = nums[i];
        nums[i] = aux;
      }
    }
  }
  for (let i = 0; i < size; i += 1) {
      if (i != nums[i]) return i;
  }
  return size;
};