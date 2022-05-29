/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const lookForward = function (nums, target, curr, start) {
    for (let i = start; i < nums.length; i += 1) {
        if (nums[curr] + nums[i] === target) return [curr, i];
    }
    return [];
}
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i += 1) {
        const temp = lookForward(nums, target, i, i + 1);
        if (temp.length > 0) return temp;
    }
    return [];
};