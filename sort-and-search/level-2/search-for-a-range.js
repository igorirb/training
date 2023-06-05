/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    let found = false;
    while (i <= j) {
        if (nums[i] < target) i += 1;
        if (nums[j] > target) j -= 1;
        if (nums[i] === target && nums[j] === target) {
            found = true;
            break;
        }
    }
    if (!found) {
        return [-1, -1];
    }
    return [i, j];
};