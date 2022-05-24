/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstNum = Number.MAX_SAFE_INTEGER;
    let secondNum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] <= firstNum) {
            firstNum = nums[i];
        } else if (nums[i] <= secondNum) {
            secondNum = nums[i];
        } else {
            return true;
        }
    }
    return false;
};