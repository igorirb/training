/**
 * Runtime error
 * Heap out of memory
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let min = Math.pow(2, 31);
    let max = -Math.pow(2, 31);
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] < min) {
            min = nums[i];
        }
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    if (max <= 0) return 1;
    const map = {};
    for (let i = 1; i <= max; i += 1) {
        map[i] = 0;
    }
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] > 0) {
            map[nums[i]] += 1;
        }
    }
    const keys = Object.keys(map);
    let missingNum = -1;
    for (let i = 0; i < keys.length; i += 1) {
        if (map[keys[i]] === 0) {
            missingNum = keys[i];
            break;
        }
    }
    if (missingNum === -1) {
        missingNum = max + 1;
    }
    return missingNum;
};