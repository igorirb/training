/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  const res = [];
  if (nums.length === 0) {
      if (lower === upper) {
          return [`${lower}`];
      }
      return [`${lower}->${upper}`];
  }
  if (nums[0] > lower) {
      if (lower === nums[0] - 1) {
          res.push(`${lower}`);
      } else {
          res.push(`${lower}->${nums[0] - 1}`);
      }
  }
  for (let i = 0; i < nums.length - 1; i += 1) {
      if (nums[i + 1] - nums[i] > 1) {
          if (nums[i] + 1 === nums[i + 1] - 1) {
              res.push(`${nums[i] + 1}`);
          } else {
              res.push(`${nums[i] + 1}->${nums[i + 1] - 1}`);
          }
      }
  }
  if (nums[nums.length - 1] < upper) {
      if (nums[nums.length - 1] + 1 === upper) {
          res.push(`${upper}`);
      } else {
          res.push(`${nums[nums.length - 1] + 1}->${upper}`);
      }
  }
  return res;
};