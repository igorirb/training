/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let multAll = 1;
    let countZeroes = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] !== 0) {
            multAll *= nums[i];
        } else {
            countZeroes += 1;
        }
    }
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] !== 0) {
            if (countZeroes > 0) {
                nums[i] = 0;
            } else {
                nums[i] = multAll / nums[i];
            }
        } else {
            if (countZeroes > 1) {
                nums[i] = 0;
            } else {
                nums[i] = multAll;
            }
        }
    }
    return nums;
};