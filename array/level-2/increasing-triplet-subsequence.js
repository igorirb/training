/**
 * @param {number[]} nums
 * @return {boolean}
 */
const buildTriple = function(nums, pos, arr) {
  const size = arr.length;
  if (size === 3) return true;
  if (nums.length - pos < 3 - size) return false;
  let res = false;
  for (let i = pos + 1; i < nums.length; i += 1) {
      if (nums[i] > arr[size - 1]) {
          if (buildTriple(nums, i, [...arr, nums[i]])) {
              res = true;
              break;
          }
      }
  }
  return res;
}
var increasingTriplet = function(nums) {
  let res = false;
  for (let i = 0; i < nums.length; i += 1) {
      if (buildTriple(nums, i, [nums[i]])) {
          res = true;
          break;
      }
  }
  return res;
};