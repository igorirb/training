/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let prod = 1;
  const helper = [];
  let countZero = 0;
  for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] === 0) {
          helper.push(0);
          countZero += 1;
      } else {
          prod *= nums[i];
          helper.push(1);
      }
  }
  const res = [];
  for (let i = 0; i < nums.length; i += 1) {
      if (countZero > 1) {
          res.push(0);
      } else if (helper[i] === 0) {
          res.push(prod);
      } else if (countZero > 0) {
          res.push(0);
      } else {
          res.push(prod / nums[i]);
      }
  }
  return res;
};