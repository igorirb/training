/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let countZeroes = 0;
    let mult = 1;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === 0) {
            countZeroes += 1;
        } else {
            mult *= nums[i];
        }
    }
    const out = [];
    for (let i = 0; i < nums.length; i += 1) {
        if (countZeroes > 1) out.push(0);
        else if (nums[i] === 0) out.push(mult);
        else if (countZeroes === 1) out.push(0);
        else out.push(mult / nums[i])
    }
    return out;
};