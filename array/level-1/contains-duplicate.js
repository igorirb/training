/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  const map = {};
  response = false;
  for (let i = 0; i < nums.length; i++) {
      const curVal = nums[i];
      if (map[curVal] > 0) {
          return true;
      } else {
          map[curVal] = 0;
      }
      map[curVal] += 1;
  }
  return false;
};