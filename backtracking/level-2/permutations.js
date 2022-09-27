/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function build(res, nums, curr) {
  if (nums.length === 0) {
      res.push(curr);
      return;
  }
  for (let i = 0; i < nums.length; i += 1) {
      const newNums = nums.filter((_, k) => k !== i);
      build(res, newNums, [...curr, nums[i]]);
  }
}
var permute = function(nums){
  const res = [];
  build(res, nums, []);
  return res;
};