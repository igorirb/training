/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const left = [1];
    for (let i = 1; i < nums.length; i += 1) {
        left.push(left[i - 1] * nums[i - 1]);
    }
    const right = [1];
    for (let i = nums.length - 2; i >= 0; i -= 1) {
        right.push(nums[i + 1] * right[nums.length - 2 - i]);
    }
    const res = [];
    for (let i = 0; i < nums.length; i += 1) {
        res.push(left[i] * right[nums.length - 1 - i]);
    }
    return res;
};