/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = [];
  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i += 1) {
      const target = -sorted[i];;
      let left = i + 1;
      let right = sorted.length - 1;
      while (left < right) {
          const sum = sorted[left] + sorted[right];
          if (sum === target) {
              const temp = [sorted[i], sorted[left], sorted[right]];
              res.push(temp);
              while (left < right && sorted[left] === temp[1]) left += 1;
              while (left < right && sorted[right] === temp[2]) right -= 1;
          } else if (sum > target) {
              right -= 1;
          } else {
              left += 1;
          }
          while (i + 1 < sorted.length && sorted[i] === sorted[i + 1]) i += 1;
      }
  }
  return res;
};