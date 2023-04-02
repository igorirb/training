/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const numbers = Array(Math.pow(10, 5));
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        if (!numbers[num]) {
            numbers[num] = 1;
        } else {
            numbers[num] += 1;
        }
    }
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] && numbers[i] > 1) {
            return i;
        }
    }
};