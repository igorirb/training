/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
      if (map.get(nums[i]) !== undefined) {
          return [map.get(nums[i]), i];
      } else {
          map.set(target - nums[i], i);
      }
  }
  return [];  
};